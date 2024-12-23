import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDTO } from './product.dto';
import { Product } from './product.entity';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
    getProduct(): any {
      return this.productService.getProduct();
    }
    
    @Post('approve')
    approveProduct(@Body() data:productDTO):Promise<productDTO>
    {
      return this.productService.approveProduct(data);
    }
    @Delete('delete/:id')
    async deleteProduct(@Param('id')id: number): Promise<void>
    {
        return this.productService.deleteProduct(id);
    }
    @Patch('update/:id')
    update(@Param('id') id:number)
     {
      return this.productService.update(id);
    }  
}
