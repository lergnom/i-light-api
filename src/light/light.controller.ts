import { Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { LightService } from './light.service';

@Controller('light')
export class LightController {
  constructor(private readonly lightService: LightService) {
  }
  @Post('status')
  @HttpCode(200)
  async lightStatus(){
  this.lightService.getStatus();
  return 'okk';
  }

  @Post('lighton')
  @HttpCode(200)
  async lightClickOn(){
	return this.lightService.lightOn();
  }
}

