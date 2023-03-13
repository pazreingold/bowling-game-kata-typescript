import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  score(): number {
    return this.appService.score();
  }

  roll(pins: number): void {
    this.appService.roll(pins);
  }
}
