import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';


describe('PaymentController', () => {
  let paymentController: PaymentController;

  beforeEach(async () => {
    const payment: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService],
    }).compile();

    paymentController = payment.get<PaymentController>(PaymentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentController.getPayment()).toBe('Hello World!');
    });
  });
});
