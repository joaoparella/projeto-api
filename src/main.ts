import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  const httpsOptions = {
    key: fs.readFileSync('./secrets/create-cert-key.pem'),
    cert: fs.readFileSync('./secrets/create-cert.pem'),
  };

  
  const app = await NestFactory.create(AppModule,{httpsOptions});
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  
  useContainer(app.select(AppModule),{fallbackOnErrors:true})
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
