import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment
{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    amount:number;


}