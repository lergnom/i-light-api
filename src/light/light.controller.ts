import { Controller, HttpCode, Post } from '@nestjs/common';
import { LightService } from './light.service';

@Controller('light')
export class LightController {
  constructor(private readonly lightService: LightService) {
  }
  @Post('status')
  @HttpCode(200)
  async lightStatus(){
	return this.lightService.getStatus();
  }
}
