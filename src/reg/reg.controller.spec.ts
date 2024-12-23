import { Test, TestingModule } from '@nestjs/testing';
import { RegController } from './reg.controller';
import { RegService } from './reg.service';

describe('RegController', () => {
  let regController: RegController;

  beforeEach(async () => {
    const reg: TestingModule = await Test.createTestingModule({
      controllers: [RegController],
      providers: [RegService],
    }).compile();

    regController = reg.get<RegController>(RegController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(regController.getReg()).toBe('Hello World!');
    });
  });
});
