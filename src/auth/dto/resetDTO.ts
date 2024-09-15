import { IsEmail } from "class-validator";

export class AuthResetDTO {

    @IsEmail()
    email: string

}