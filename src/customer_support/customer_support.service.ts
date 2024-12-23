import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer_Support } from './customer_support.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Customer_SupportService {
  constructor(@InjectRepository(Customer_Support)
private customer_supportRepository:Repository<Customer_Support>){}

  async getCustomer_Support() {
    return await this.customer_supportRepository.find();
  }
  async createCustomer_Support(customer_support) {
    return await this.customer_supportRepository.save(customer_support);
  }
  async deleteCustomer_Support(id:number): Promise<void>
    {
        await this.customer_supportRepository.delete(id);
    }
    async update(id:number)
     {
       return await this.customer_supportRepository.findOne({where:{id}});
     
    }
}