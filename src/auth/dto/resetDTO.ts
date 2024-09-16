import { IsEmail, IsStrongPassword } from "class-validator";

export class AuthResetDTO {

    @IsStrongPassword()
    password: string

}