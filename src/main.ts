import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const APP_PORT = configService.get<number>('APP_PORT') || 3000;
  const NODE_ENV = configService.get('NODE_ENV') || 'local';
  await app.listen(APP_PORT, () => {
    console.log('===', NODE_ENV, ' APPLICATION IS RUNNING ON PORT:', APP_PORT, '===');
  });
}
bootstrap();
