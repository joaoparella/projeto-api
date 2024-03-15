import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { filmeProviders } from "src/filme/filme.providers";
import { FilmeService } from "src/filme/filme.service";
import { generoProviders } from "src/genero/genero.providers";
import { GeneroService } from "src/genero/genero.service";
import { SerieController } from "./serie.controller";
import { serieProviders } from "./serie.providers";
import { SerieService } from "./serie.service";


@Module({
    imports: [DatabaseModule],
    controllers:[SerieController],
    providers: [
        ...serieProviders,
    SerieService,
        ...filmeProviders,
    FilmeService,
        ...generoProviders,
    GeneroService,
    ],
})

export class SerieModule{
    
}
