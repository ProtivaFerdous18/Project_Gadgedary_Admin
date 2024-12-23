import { Test, TestingModule } from '@nestjs/testing';
import { Customer_SupportController } from './customer_support.controller';
import { Customer_SupportService } from './customer_support.service';


describe('Customer_SupportController', () => {
  let customer_supportController: Customer_SupportController;

  beforeEach(async () => {
    const customer_support: TestingModule = await Test.createTestingModule({
      controllers: [Customer_SupportController],
      providers: [Customer_SupportService],
    }).compile();

    customer_supportController = customer_support.get<Customer_SupportController>(Customer_SupportController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customer_supportController.getCustomer_Support()).toBe('Hello World!');
    });
  });
});
