import { Body, Controller, Headers, Post, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/loginDTO";
import { AuthForgetDTO } from "./dto/forgetDTO";
import { AuthResetDTO } from "./dto/resetDTO";
import { AuthRegisterDTO } from "./dto/registerDTO";
import { AuthService } from "./Auth.service";
import { AuthGuard } from "../guards/auth.guard";
import { User } from "src/decorators/use-check-decorators";
import { FileInterceptor } from "@nestjs/platform-express";
import { writeFile } from "fs/promises";
import {join} from 'path'



@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService) {
        
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
    @UseGuards(AuthGuard)
    @Post('me')
    async me(@User() user) {
        
        return {me: 'ok', data: user}
    }
    @UseInterceptors(FileInterceptor('file'))
    @UseGuards(AuthGuard)
    @Post('photo')
    async uploadFhoto(@User() user, @UploadedFile() file: Express.Multer.File) {
        

        const result = await writeFile(join(__dirname, '../', '../', 'storage', 'photos', `photo-${user.id}.png`), file.buffer)

        return {result}
    }





}