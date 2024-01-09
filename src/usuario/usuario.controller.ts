import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import {v4  as uuid} from 'uuid'
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";

import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{    
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
        
    }
    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.cidade,
                usuario.email,
                usuario.retornaAssinatura(),
                usuario.senha
            )
        );
        
        return listaRetorno;
    }

    @Get('/login')
    async Login(@Body() dadosUsuario: LoginUsuarioDTO){
        var login = this.clsUsuariosArmazenados.validarLogin(dadosUsuario.email,dadosUsuario.senha);
        return {
            status: login,
            message: login ? "Login efetuado" : "Usuario ou senha inválidos"
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }


    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AlteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUSuario(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }

    @Put('/assinatura/:id/:dias')
    async adicionaAssinatura(@Param('id') id: string, @Param('dias') dias: BigInteger){
        const vencimento = await this.clsUsuariosArmazenados.adicionarAssinatura(id, dias)

        return{
            vencimento: vencimento,
            message: 'Usuário atualizado'
        }
    }

    @Get('/assinatura/:id')
    async buscaAssinatura(@Param('id') id: string){
        const vencimento = await this.clsUsuariosArmazenados.validaAssinatura(id)

        return{
            vencimento: vencimento            
        }
    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        var usuario = new UsuarioEntity(uuid(),dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,
                                    dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha)
        
            
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);        
        var retorno={
            id: usuario.id,
            message:'Usuário Criado'
        }
        
        return retorno
    }
}