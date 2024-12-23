import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';


describe('DashboardController', () => {
  let dashboardController: DashboardController;

  beforeEach(async () => {
    const dashboard: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [DashboardService],
    }).compile();

    dashboardController = dashboard.get<DashboardController>(DashboardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dashboardController.getDashboard()).toBe('Hello World!');
    });
  });
});
