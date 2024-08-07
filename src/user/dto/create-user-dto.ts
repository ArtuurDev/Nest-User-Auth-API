import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";



export class CreateUserDTO {


    @IsString()
    name: string
    
    @IsEmail()
    email: string

    @IsString()
    cpf: string

    @IsStrongPassword()
    password: string

    @IsOptional()
    @IsDateString()
    created_at:  string 
    @IsOptional()
    @IsDateString()
    updated_at:  string

    

}