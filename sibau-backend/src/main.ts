import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'], // Adjust log levels as needed
  });

  app.enableCors();

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
