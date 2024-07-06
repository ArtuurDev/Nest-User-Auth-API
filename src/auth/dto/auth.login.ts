import { IsEmail, IsStrongPassword } from "class-validator";

export class AuthLoginDTO {

    email: string

    password: string

}