import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";



export class criaFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @ApiProperty({
        example: 'Indiana Jones',
        description: `O nome é usado para identificar o filme e listar.`,
    })
    nome:string;
    
    @IsInt()
    @ApiProperty({
        example: '120',
        description: `A duração é um parametro numerico que armazena quantos minutos tem o filme.`,
    })
    duracao: number;

    @IsString()
    @ApiProperty({
        example: 'O filme conta a história de um arqueólogo....',
        description: `Uma breve descrição ou a sinopse completa do filme.`,
    })
    sinopse: string;

    @IsString()  
    @ApiProperty({
        example: '2012',
        description: `O ano de lançamento do filme.`,
    })  
    ano: string;

    @IsString()
    @ApiProperty({
        example: 'Ação',
        description: `Descrição do genero do filme`,
    })
    genero: string;

}

