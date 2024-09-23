import { IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword } from "class-validator"
import { User } from "src/enums/enums"


export class CreateUserDTO {


    name: string
    
    @IsEmail()
    email: string
    
    @IsStrongPassword()
    password: string
    
    @IsString()
    CPF:string

    @IsOptional()
    @IsEnum(User)
    role: string
    
}

