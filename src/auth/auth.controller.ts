import { Body, Controller, Header, Headers, Post, UseInterceptors } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRegisterDTO } from "./dto/auth.register.dto";
import { AuthLoginDTO } from "./dto/auth.login";
import { LogInterceptor } from "src/interceptor/log.interceptor";


@UseInterceptors(LogInterceptor)
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {

    } 


    @Post()
    async register(@Body() data: AuthRegisterDTO) {

        return this.authService.register(data)

    }

    @Post('login')
    async login(@Body() {email, password}: AuthLoginDTO) {

        return this.authService.login(email, password)

    }


    @Post('me')
    async me(@Body() body ) {
        return this.authService.checkToken(body.token)
    }

}