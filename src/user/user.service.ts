import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
private userRepository:Repository<User>){}

  async getUser() {
    return await this.userRepository.find();
  }
  async createUser(user) {
    return await this.userRepository.save(user);
  }
  async deleteUser(id:number): Promise<void>
    {
        await this.userRepository.delete(id);
    }
  async searchUser(id){
    return await this.userRepository.findOne({where:{id}});
  }
  async update(id:number)
     {
       return await this.userRepository.findOne({where:{id}});
     
    }

}
