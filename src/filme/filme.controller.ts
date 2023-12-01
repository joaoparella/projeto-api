import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { alteraFilmeDTO } from "./dto/atualizaFilme.dto";
import { criaFilmeDTO } from "./dto/insereFilme.dto";
import { ListaFilmesDTO } from "./dto/listaFilmes.dto";
import { FilmesArmazenados } from "./filme.dm";
import { FilmeEntity } from "./filme.entity";
import {v4  as uuid} from 'uuid'

@Controller('/filmes')
export class FilmeController{    
    constructor(private clsFilmesArmazenados: FilmesArmazenados){
        
    }

    @Get()
    async RetornoFilme(){
        const filmesListados = await this.clsFilmesArmazenados.Filmes;
        const listaRetorno = filmesListados.map(
            filme => new ListaFilmesDTO(
                filme.id,
                filme.nome,
                filme.duracao,
                filme.sinopse
            )
        );
        
        return listaRetorno;
    }

    @Get('/compartilhar/:id')
    async CompartilharFilme(@Param('id') id: string){
        const retorno = await this.clsFilmesArmazenados.CompartilharFilme(id);
        return{            
            message: retorno
        }
                
    }

    @Delete('/:id')
    async removeFilme(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmesArmazenados.removeFilme(id)

        return{
            filme: filmeRemovido,
            message: 'Filme removido'
        }
    }


    @Put('/:id')
    async atualizaFilme(@Param('id') id: string, @Body() novosDados: alteraFilmeDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualizaFilme(id, novosDados)

        return{
            filme: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Post()
    async criaFilme(@Body() dados: criaFilmeDTO){
        var filme = new FilmeEntity(uuid(),dados.nome,dados.duracao,dados.sinopse,
                                        dados.ano, dados.genero)
        
            
        this.clsFilmesArmazenados.AdicionarFilme(filme);        
        var retorno={
            id: filme.id,
            message:'Filme Criado'
        }
        
        return retorno
    }
}