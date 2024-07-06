import { IsJWT } from "class-validator"


export class AuthResetDTO {

    password: string

    @IsJWT()
    token: string

}