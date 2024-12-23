import { Customer_SupportModule } from './customer_support/customer_support.module';
import { PaymentModule } from './payment/payment.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoryModule } from './category/category.module';
import { LoginModule } from './login/login.module';
import { RegModule } from './reg/reg.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule,ProductModule,PaymentModule,DashboardModule,Customer_SupportModule,CategoryModule,LoginModule,RegModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Gadgedary',
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
