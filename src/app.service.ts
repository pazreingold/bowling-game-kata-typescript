import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private rolls: number[] = [];
  private total = 0;

  score(): number {
    let fistBallInFrame = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[fistBallInFrame] + this.rolls[fistBallInFrame + 1] == 10) {
        this.total += 10 + this.rolls[fistBallInFrame + 2];
      } else {
        this.total +=
          this.rolls[fistBallInFrame] + this.rolls[fistBallInFrame + 1];
      }
      fistBallInFrame += 2;
    }
    return this.total;
  }

  roll(pins: number): void {
    this.rolls.push(pins);
  }
}
