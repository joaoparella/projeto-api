import { Module } from "@nestjs/common";
import { FilesArmazenados } from "src/files/files.dm";
import { ArquivoValido, ArquivoValidoValidator } from "src/files/validacao/arquivo-valido.validator";
import { UsuarioController } from "./usuario.controller";
import { UsuariosArmazenados } from "./usuario.dm";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";

@Module({
    controllers:[UsuarioController],
    providers: [UsuariosArmazenados,EmailUnicoValidator,ArquivoValidoValidator]
})

export class UsuarioModule{
    
}