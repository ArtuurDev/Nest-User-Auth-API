import { IsEmail, IsString } from "class-validator";
import { CreateDateColumn } from "typeorm";



export class CreateUserDTO {


    @IsString()
    name: string
    
    @IsEmail()
    email: string

    @IsString()
    cpf: string

    

}