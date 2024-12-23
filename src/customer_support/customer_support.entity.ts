import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer_Support
{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    feedback:string;

}