import { Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { LightService } from './light.service';

@Controller('light')
export class LightController {
  constructor(private readonly lightService: LightService) {
  }
  @Post('status')
  @HttpCode(200)
  async lightStatus(){
const res = await this.lightService.getStatus();
Logger.log(typeof res );
return  this.lightService.getStatusNow();
  }

  @Post('on')
  @HttpCode(200)
  async lightClickOn(){
	return this.lightService.lightOn();
  }
  @Post('off')
  @HttpCode(200)
  async lightClickOff(){
	return this.lightService.lightOff();
  }
}

