import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { AuthRegisterDTO } from "./dto/auth.register.dto";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class AuthService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService) {

    }


    async createToken(user: User) {

        return {
            accessToken: this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email,
            },)
        }

    }


    async checkToken(token: string) {
    }

    async register(data: AuthRegisterDTO) {

        const {email} = data
        const {cpf} = data

        const userEmail = await this.prisma.user.count({
            where: {
                email
            }
        })

        const userCpf = await this.prisma.user.count({
            where: {
                cpf
            }
        })

        const user = await this.prisma.user.create({
            data
        })

        if (userEmail || userCpf ) {

            if (userEmail) {
                throw new BadRequestException('esse email já existe')
            }
            if (userCpf) {
                throw new BadRequestException('CPF inválido')
            }
        }
    
        return this.createToken(user)

    }

    async login(email: string, password: string) {

        const user = await this.prisma.user.findFirst({
            where: {
                email,
                password
            }
        })

        if (!user) {
            throw new UnauthorizedException('email e/ou senha incorreto')
        }

        return this.createToken(user)

    }

}