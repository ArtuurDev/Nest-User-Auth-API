import { IsEmail, IsString, IsStrongPassword } from "class-validator"


export class CreateUserDTO {

    name: string
    @IsEmail()
    email: string
    @IsStrongPassword()
    password: string
    
    @IsString()
    CPF:string
    
}

