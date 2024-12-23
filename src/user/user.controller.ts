
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): any {
    return this.userService.getUser();
  }
  @Get(':id')
  searchUser(@Param('id') id):any{
  return this.userService.searchUser(id);
  }
  @Post('add')
  createUser(@Body() data:userDTO):Promise<userDTO>
  {
    return this.userService.createUser(data);
  }
  @Delete('delete/:id')
    async deleteUser(@Param('id')id: number): Promise<void>
    {
        return this.userService.deleteUser(id);
    }
  @Patch('update/:id')
      update(@Param('id') id:number)
       {
        return this.userService.update(id);
      } 
  
  
}
