import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional,IsString } from "class-validator";

export class atorFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "ID Não pode ser vazio"})
    @ApiPropertyOptional({
        example: '',
        description: `Deve ser inforado o ID do ator a ser vinculado ao filme.`,
    })
    IDATOR:string;
    
    @IsInt()
    @ApiPropertyOptional({
        example: '',
        description: `Deve ser informado o ID do filme a vincular com o ATOR.`,
    })
    IDFILME: string;

}
