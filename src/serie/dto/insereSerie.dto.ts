import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";
import { criaFilmeDTO } from "src/filme/dto/insereFilme.dto";



export class criaSerieDTO extends criaFilmeDTO{    
    @IsString()
    nomeSerie: string;

    @IsString()
    episodio: string;

    @IsString()
    temporada: string;
}