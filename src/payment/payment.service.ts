import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment)
private paymentRepository:Repository<Payment>){}

  async getPayment() {
    return await this.paymentRepository.find();
  }
  async createPayment(payment) {
    return await this.paymentRepository.save(payment);
  }
  async deletePayment(id:number): Promise<void>
    {
        await this.paymentRepository.delete(id);
    }
  async searchPayment(id){
    return await this.paymentRepository.findOne({where:{id}});
  }
  async update(id:number)
     {
       return await this.paymentRepository.findOne({where:{id}});
     
    }
  

}
