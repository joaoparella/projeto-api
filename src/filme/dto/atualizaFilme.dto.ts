import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";



export class alteraFilmeDTO{
    @IsString()
    @IsOptional()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiPropertyOptional({
        example: 'Indiana Jones',
        description: `O nome é usado para identificar o filme e listar.`,
    })
    nome:string;
    
    @IsInt()
    @IsOptional()
    @ApiPropertyOptional({
        example: '120',
        description: `A duração é um parametro numerico que armazena quantos minutos tem o filme.`,
    })
    duracao: number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'O filme conta a história de um arqueólogo....',
        description: `Uma breve descrição ou a sinopse completa do filme.`,
    })
    sinopse: string;

    @IsString()    
    @IsOptional()
    @ApiPropertyOptional({
        example: '2012',
        description: `O ano de lançamento do filme.`,
    })
    ano: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Ação',
        description: `Descrição do genero do filme`,
    })
    genero: string;

}