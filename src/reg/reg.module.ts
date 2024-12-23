import { Module } from "@nestjs/common";
import { RegController } from "./reg.controller";
import { RegService } from "./reg.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reg } from "./reg.entity";



@Module({
  imports: [TypeOrmModule.forFeature([Reg])],
  controllers: [RegController],
  providers: [RegService],
})
export class RegModule {}
