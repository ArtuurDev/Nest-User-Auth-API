import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/loginDTO";
import { AuthForgetDTO } from "./dto/forgetDTO";
import { AuthResetDTO } from "./dto/resetDTO";
import { AuthRegisterDTO } from "./dto/registerDTO";
import { AuthService } from "./Auth.service";
import { UserService } from "src/User/User.Service";


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService) {
        
    }

    @Post('login')
    async login(@Body() data: AuthLoginDTO) {

        return this.authService.login(data)

    }


    @Post('forget')
    async forget(@Body() data: AuthForgetDTO) {

        return this.authService.forget(data)

    }

    @Post('reset')
    async reset(@Body() {password}: AuthResetDTO, token: string) {

        return this.authService.reset(password, token)
    }


    @Post('register')
    async register(@Body() data: AuthRegisterDTO) {

        return this.authService.register(data)

    }

    @Post('me')
    async me(@Body() body) {

        console.log(body.token)
        return this.authService.checkToken(body.token)
    }


}