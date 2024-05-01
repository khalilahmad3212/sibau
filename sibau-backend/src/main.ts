import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'], // Adjust log levels as needed
  });
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Specify the allowed HTTP methods
      allowedHeaders: ['Content-Type'], //
      credentials: true, // Enable credentials (e.g., cookies, authorization headers)
    }),
  );



  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true
  //   }),
  // );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      validationError: { target: false, value: false },
    })
  );

  await app.listen(5001);
}
bootstrap();
