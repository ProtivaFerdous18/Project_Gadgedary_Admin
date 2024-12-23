import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { paymentDTO } from './payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  getPayment(): any {
    return this.paymentService.getPayment();
  }
  @Get(':id')
  searchPayment(@Param('id') id):any{
  return this.paymentService.searchPayment(id);
  }
  @Post('add')
  createPayment(@Body() data:paymentDTO):Promise<paymentDTO>
  {
    return this.paymentService.createPayment(data);
  }
  @Delete('delete/:id')
    async deletePayment(@Param('id')id: number): Promise<void>
    {
        return this.paymentService.deletePayment(id);
    }
  @Patch('update/:id')
      update(@Param('id') id:number)
       {
        return this.paymentService.update(id);
      } 
  
  
  
  
}

