import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";



export class alteraFilmeDTO{
    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome:string;
    
    @IsInt()
    @IsOptional()
    duracao: BigInteger;

    @IsString()
    @IsOptional()
    sinopse: string;

    @IsString({message:"email é inválido"})    
    @IsOptional()
    ano: string;

    @IsString()
    @IsOptional()
    genero: string;

}