import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
