import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reg } from './reg.entity';

@Injectable()
export class RegService {
  constructor(@InjectRepository(Reg)
private regRepository:Repository<Reg>){}

  async getReg() {
    return await this.regRepository.find();
  }
  async createReg(reg) {
    return await this.regRepository.save(reg);
  }
  async deleteReg(id:number): Promise<void>
    {
        await this.regRepository.delete(id);
    }
  async searchReg(id){
    return await this.regRepository.findOne({where:{id}});
  }
  async update(id:number)
     {
       return await this.regRepository.findOne({where:{id}});
     
    }

}
