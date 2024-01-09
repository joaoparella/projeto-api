import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";



export class criaFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome:string;
    
    @IsInt()
    duracao: BigInteger;

    @IsString()
    sinopse: string;

    @IsString()    
    ano: string;

    @IsString()
    genero: string;

}