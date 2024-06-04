import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setupRedoc } from './shared/middlewares/redoc.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('pettech-stock')
    .setDescription('The pettech-stock API description')
    .setVersion('1.0')
    .addTag('stock')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  setupRedoc(app);
  await app.listen(Number(process.env.PORT) || 3010);
}
bootstrap();
