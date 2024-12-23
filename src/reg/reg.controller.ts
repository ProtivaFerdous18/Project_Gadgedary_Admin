import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RegService } from './reg.service';
import { regDTO } from './reg.dto';


@Controller('reg')
export class RegController {
  constructor(private readonly regService: RegService) {}

  @Get()
  getReg(): any {
    return this.regService.getReg();
  }
  @Get(':id')
  searchReg(@Param('id') id):any{
  return this.regService.searchReg(id);
  }
  @Post('add')
  createReg(@Body() data:regDTO):Promise<regDTO>
  {
    return this.regService.createReg(data);
  }
  @Delete('delete/:id')
    async deleteReg(@Param('id')id: number): Promise<void>
    {
        return this.regService.deleteReg(id);
    }
  @Patch('update/:id')
      update(@Param('id') id:number)
       {
        return this.regService.update(id);
      } 
  
  
}