import { Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { LightService } from './light.service';

@Controller('light')
export class LightController {
  constructor(private readonly lightService: LightService) {
  }
  @Post('status')
  @HttpCode(200)
  async lightStatus(){
  await this.lightService.getStatus();
  return  this.lightService.getStatusNow();
  }

  @Post('on')
  @HttpCode(200)
  async lightClickOn(){
	await this.lightService.lightOn();
	return 'on'; 
  }

  @Post('off')
  @HttpCode(200)
  async lightClickOff(){
  await this.lightService.lightOff();
  return 'off';
  }
}

