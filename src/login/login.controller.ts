import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { loginDTO } from './login.dto';
import { Login } from './login.entity';


@Controller('index')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getLogin(): any {
    return this.loginService.getLogin();
  }
  @Get(':id')
  searchLogin(@Param('id') id):any{
  return this.loginService.searchLogin(id);
  }
  @Post('add')
  createLogin(@Body() data:loginDTO):Promise<loginDTO>
  {
    return this.loginService.createLogin(data);
  }
  @Delete('delete/:id')
    async deleteLogin(@Param('id')id: number): Promise<void>
    {
        return this.loginService.deleteLogin(id);
    }
  @Patch('update/:id')
      update(@Param('id') id:number)
       {
        return this.loginService.update(id);
      } 
  
  
  
  
}
