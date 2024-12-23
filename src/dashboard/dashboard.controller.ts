import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  getDashboard(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getProduct(): Promise<string> {
    return await this.dashboardService.getProduct();
  }
  @Get()
  async getUser(): Promise<string> {
    return await this.dashboardService.getUser();
  }
}
