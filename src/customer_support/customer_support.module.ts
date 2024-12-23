import { Module } from '@nestjs/common';
import { Customer_SupportController } from './customer_support.controller';
import { Customer_SupportService } from './customer_support.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer_Support } from './customer_support.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer_Support])],
  controllers: [Customer_SupportController],
  providers: [Customer_SupportService],
})
export class Customer_SupportModule {}
