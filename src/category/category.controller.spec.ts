import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';


describe('CategoryController', () => {
  let categoryController: CategoryController;

  beforeEach(async () => {
    const category: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService],
    }).compile();

    categoryController = category.get<CategoryController>(CategoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(categoryController.getHello()).toBe('Hello World!');
    });
  });
});
