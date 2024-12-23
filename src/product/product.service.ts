import { Injectable, NotFoundException } from '@nestjs/common';
import { productDTO } from './product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
 
  constructor(@InjectRepository(Product)
  private productRepository:Repository<Product>){}
  
    async getProduct() {
      return await this.productRepository.find();
    }
    async approveProduct(product) {
      return await this.productRepository.save(product);
    }
    async deleteProduct(id:number): Promise<void>
    {
        await this.productRepository.delete(id);
    }
    async update(id:number)
     {
       return await this.productRepository.findOne({where:{id}});
     
    }
}
