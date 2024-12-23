import {IsEmail} from 'class-validator';
export class customer_supportDTO
{
    id:number;
    name:string;
    @IsEmail()
    email:string;
    feedback:string;


}