import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    })
    nome:string;
    
    @IsInt()
    @IsOptional()
    @ApiPropertyOptional({
        example: '18',
        description: `A idade é utilizada para identificar a idade do usuário, deve ser numérico.`,
    })
    idade: number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'São Paulo',
        description: `A cidade é utilizada para identificar a localização do usuário.`,
    })
    cidade: string;

    @IsEmail(undefined,{message:"email é inválido"})
    @EmailUnico({message:"O email informado já existe"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    })
    email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: '(00)00000-0000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    })
    telefone: string;

    @MinLength(6,{message: "Senha precisa de pelo menos 6 digitos"})
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    })
    senha: string; 
}