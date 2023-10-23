import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerDocs } from 'docs/swagger.docs';
import { RedocModule } from '@juicyllama/nestjs-redoc';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addServer('https://api.pokemon.creatusdev.com', 'Produção')
    .setTitle('API de busca de Pokemons no Blockchain')
    .setDescription(
      'Esta documentação detalha as rotas e os modelos de dados da API.',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document, null, 2));
  const options = SwaggerDocs.setup();
  await RedocModule.setup('/docs', app, document, options);

  app.enableCors({
    origin: '*',
  });

  app.use(
    helmet({
      contentSecurityPolicy: false,
      noSniff: false,
    }),
  );

  await app.listen(3000);
}
bootstrap();
