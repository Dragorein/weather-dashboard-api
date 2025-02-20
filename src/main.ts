import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ResponseSuccessInterceptor } from './middlewares/interceptors/response.success.interceptor';
import { ResponseErrorInterceptor } from './middlewares/interceptors/response.error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalInterceptors(new ResponseSuccessInterceptor());
  app.useGlobalFilters(new ResponseErrorInterceptor());
  app.setGlobalPrefix('');
  app.enableCors();

  const port = process.env.PORT;

  await app.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
  });
}
bootstrap();
