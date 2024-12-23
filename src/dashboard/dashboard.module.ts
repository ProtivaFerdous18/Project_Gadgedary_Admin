import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';
import { Customer_SupportModule } from 'src/customer_support/customer_support.module';



@Module({
  imports: [ProductModule,UserModule,Customer_SupportModule],
    
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
