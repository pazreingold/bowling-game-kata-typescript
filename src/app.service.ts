import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private rolls: number[] = [];
  private total = 0;

  score(): number {
    let fistBallInFrame = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(fistBallInFrame)) {
        this.total += this.addStrike(fistBallInFrame);
        fistBallInFrame += 1;
      } else if (this.isSpare(fistBallInFrame)) {
        this.total += this.addSpare(fistBallInFrame);
        fistBallInFrame += 2;
      } else {
        this.total += this.addRegular(fistBallInFrame);
        fistBallInFrame += 2;
      }
    }
    return this.total;
  }

  roll(pins: number): void {
    this.rolls.push(pins);
  }

  private isSpare(fistBallInFrame: number): boolean {
    return this.rolls[fistBallInFrame] + this.rolls[fistBallInFrame + 1] == 10;
  }

  private addSpare(fistBallInFrame: number): number {
    return 10 + this.rolls[fistBallInFrame + 2];
  }

  private isStrike(fistBallInFrame: number) {
    return this.rolls[fistBallInFrame] == 10;
  }

  private addStrike(fistBallInFrame: number): number {
    return 10 + this.rolls[fistBallInFrame + 1] + this.rolls[fistBallInFrame + 2];
  }

  private addRegular(fistBallInFrame: number): number {
    return this.rolls[fistBallInFrame] + this.rolls[fistBallInFrame + 1];
  }
}
