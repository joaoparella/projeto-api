import { Module } from '@nestjs/common';
import { FilmeModule } from './filme/filme.module';
import { UsuarioModule } from './usuario/usuario.module';



@Module({
  imports: [UsuarioModule,FilmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
