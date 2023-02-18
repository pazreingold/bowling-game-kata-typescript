import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private rolls: number[] = [];

  score(): number {
    return this.rolls.reduce((a, b) => a + b);
  }

  roll(pins: number): void {
    this.rolls.push(pins);
  }
}
