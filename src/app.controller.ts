import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './cat';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getCat(): Cat {
    return {};
  }
}
