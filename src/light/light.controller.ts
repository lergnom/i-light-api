import { Controller, HttpCode, Post } from '@nestjs/common';
import { LightService } from './light.service';

@Controller('light')
export class LightController {
  constructor(private readonly lightService: LightService) {
  }
  @Post('light')
  @HttpCode(200)
  async lightOn(){
	return null;
  }
}
