import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  function rollMany(rolls: number, pins: number): void {
    range(0, rolls).forEach(() => appController.roll(pins));
  }

  function range(start: number, end: number): number[] {
    return Array.from({ length: end - start }, (v, k) => k + start);
  }

  describe('root', () => {
    it('game of all zeros', () => {
      rollMany(20, 0);
      expect(appController.score()).toBe(0);
    });

    it('game of all ones', () => {
      rollMany(20, 1);
      expect(appController.score()).toBe(20);
    });
  });
});
