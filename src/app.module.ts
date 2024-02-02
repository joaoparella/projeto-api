import { Module } from '@nestjs/common';
import { FilesArmazenados } from './files/files.dm';
import { FilesModule } from './files/files.module';
import { FilmeModule } from './filme/filme.module';
import { SerieModule } from './serie/serie.module';
import { UsuarioModule } from './usuario/usuario.module';




@Module({
  imports: [UsuarioModule,FilmeModule,FilesModule,SerieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
