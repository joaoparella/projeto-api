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
    async Retorno(){
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
    async Compartilhar(@Param('id') id: string){
        const retorno = await this.clsFilmesArmazenados.Compartilhar(id);
        return{            
            message: retorno
        }
                
    }

    @Delete('/:id')
    async remove(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmesArmazenados.remove(id)

        return{
            filme: filmeRemovido,
            message: 'Filme removido'
        }
    }


    @Put('/:id')
    async atualiza(@Param('id') id: string, @Body() novosDados: alteraFilmeDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualiza(id, novosDados)

        return{
            filme: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Post()
    async cria(@Body() dados: criaFilmeDTO){
        var filme = new FilmeEntity(uuid(),dados.nome,dados.duracao,dados.sinopse,
                                        dados.ano, dados.genero)
        
            
        this.clsFilmesArmazenados.Adicionar(filme);        
        var retorno={
            id: filme.id,
            message:'Filme Criado'
        }
        
        return retorno
    }
}