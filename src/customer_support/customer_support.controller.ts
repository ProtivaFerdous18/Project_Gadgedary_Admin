
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Customer_SupportService } from './customer_support.service';
import { customer_supportDTO } from './customer_support.dto';


@Controller('customer')
export class Customer_SupportController {
  constructor(private readonly customer_supportService: Customer_SupportService) {}

  @Get()
  getCustomer_Support(): any {
    return this.customer_supportService.getCustomer_Support();
  }
  
  @Post('add')
  createCustomer_Support(@Body() data:customer_supportDTO):Promise<customer_supportDTO>
  {
    return this.customer_supportService.createCustomer_Support(data);
  }
  @Delete('delete/:id')
    async deleteCustomer_Support(@Param('id')id: number): Promise<void>
    {
        return this.customer_supportService.deleteCustomer_Support(id);
    }
    @Patch('update/:id')
          update(@Param('id') id:number)
           {
            return this.customer_supportService.update(id);
          } 
  
  }
