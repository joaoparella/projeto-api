import { IsEmail, MinLength } from "class-validator";

export class LoginUsuarioDTO{

    @IsEmail(undefined,{message:"email é inválido"})
    email: string;

    @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    senha: string; 
}