import {  IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { alteraFilmeDTO } from "src/filme/dto/atualizaFilme.dto";



export class alteraSerieDTO extends alteraFilmeDTO{    
    @IsString()
    @IsOptional()
    nomeSerie: string;

    @IsString()
    @IsOptional()
    episodio: string;

    @IsString()
    @IsOptional()
    temporada: string;
}