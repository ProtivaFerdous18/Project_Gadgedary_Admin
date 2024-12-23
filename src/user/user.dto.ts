import {IsEmail} from 'class-validator';

export class userDTO
{
    name:string;
    @IsEmail()
    email:string


}