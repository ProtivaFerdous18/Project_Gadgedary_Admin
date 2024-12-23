import {IsEmail} from 'class-validator';

export class loginDTO
{
    
    @IsEmail()
    email:string
    password:string;


}