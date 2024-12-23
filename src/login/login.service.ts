import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './login.entity';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(Login)
private loginRepository:Repository<Login>){}

  async getLogin() {
    return await this.loginRepository.find();
  }
  async createLogin(login) {
    return await this.loginRepository.save(login);
  }
  async deleteLogin(id:number): Promise<void>
    {
        await this.loginRepository.delete(id);
    }
  async searchLogin(id){
    return await this.loginRepository.findOne({where:{id}});
  }
  async update(id:number)
     {
       return await this.loginRepository.findOne({where:{id}});
     
    }
  

}