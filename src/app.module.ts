import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataStoreModule } from './data-store/data-store.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UtilModule } from './util/util.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`
    }),
    UtilModule,
    DataStoreModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
