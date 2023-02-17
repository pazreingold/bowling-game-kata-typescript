import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  const range = (start, end) =>
    Array.from({ length: end - start }, (v, k) => k + start);

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('game of all zeros', () => {
      range(0, 20).forEach(() => appController.roll(0));
      expect(appController.score()).toBe(0);
    });

    it('game of all ones', () => {
      range(0, 20).forEach(() => appController.roll(1));
      expect(appController.score()).toBe(20);
    });
  });
});
