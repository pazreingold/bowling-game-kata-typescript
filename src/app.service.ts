import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private currentScore = 0;

  score(): number {
    return this.currentScore;
  }

  roll(pins: number): void {
    this.currentScore += pins;
  }
}
