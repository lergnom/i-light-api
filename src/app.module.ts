import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LightController } from './light/light.controller';
import { LightService } from './light/light.service';
import { LightModule } from './light/light.module';

@Module({
  imports: [AuthModule, LightModule],
  controllers: [AppController, LightController],
  providers: [AppService, LightService],
})
export class AppModule {}
