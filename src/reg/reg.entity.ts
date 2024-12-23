import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reg
{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @Column()
    role:string;

}