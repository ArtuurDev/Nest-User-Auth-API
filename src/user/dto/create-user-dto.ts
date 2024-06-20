import { IsEmail, IsString } from "class-validator";



export class CreateUserDTO {


    @IsString()
    name: string
    
    @IsEmail()
    email: string

    @IsString()
    cpf: string

    created_at: string

    updated_at: string

    

}