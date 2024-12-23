import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
 
  
  getProduct():any{
  return this.getProduct();
  }
  getUser():any{
    return this.getUser();
    }
  

  
}
