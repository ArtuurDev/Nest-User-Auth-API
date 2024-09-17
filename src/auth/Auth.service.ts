import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthLoginDTO } from "./dto/loginDTO";
import { PrismaService } from "src/Prisma/prisma.Service";
import { User } from "@prisma/client";
import { AuthForgetDTO } from "./dto/forgetDTO";
import { UserService } from "src/User/User.Service";
import { AuthRegisterDTO } from "./dto/registerDTO";


@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService) {

    }


    createToken(user: User) {

        return {
            accessToken: this.jwtService.sign({

                user: user.id,
                name: user.name,
                email: user.email
            }, {
                subject: String(user.id),
                issuer: 'login',
                audience: 'users',
                expiresIn: '7 days'
            })
        }

    } 


    checkToken(token:string) {

        try {
            const data = this.jwtService.verify(token,{
                audience: 'users',
                issuer: 'login'
            })

            return data
        } catch (e) {
            
            throw new BadRequestException(e)
        }
        
    }


    async login(data: AuthLoginDTO) {

        const {email, password} = data

        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    email: email,
                    password: password
                }
            })
            if (!user) {
                throw new UnauthorizedException('email e/ou senha incorreta')
            }

            return this.createToken(user)
        }
        catch(error) {
            throw new BadRequestException(error)
        }

    }

    async forget(data: AuthForgetDTO) {
        const {email} = data

        try {
            const user = await this.prisma.user.findFirst({

                where: {
                    email: email
                }
            })

            if (!user) {
                throw new BadRequestException('email inválido')
            }

            return this.createToken(user)

        } catch (error) {
            console.log(error)
        }

    }

    async reset(password: string, token: string) {

        
        const info = await this.checkToken(token)

        const user = await this.prisma.user.update({
            where: {
                id: info.id
            },
            data: {
                password
            }
        })

        return this.createToken(user)

    }

    async register(data: AuthRegisterDTO) {

        const { email, CPF } = data;

        try {

            const userExists = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        { email: email },
                        { CPF: CPF }
                    ]
                }
            });
        
            if (userExists) {
                if (userExists.email === email) {
                    return { message: 'Esse e-mail já existe' };
                }
                if (userExists.CPF === CPF) {
                    return { message: 'Este CPF já está cadastrado' };
                }
            }
        
            const user = await this.prisma.user.create({
                data
            });
        
            return this.createToken(user)

        } catch (error) {
            console.log('não foi possivel criar usuario', error);
            throw new BadRequestException('não foi possivel criar usuário');
        }


        
    }

}