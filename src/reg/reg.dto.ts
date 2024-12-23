import {IsEmail} from 'class-validator';

export class regDTO
{
    name:string;
    @IsEmail()
    email:string
    password:string;
    role:string;


}