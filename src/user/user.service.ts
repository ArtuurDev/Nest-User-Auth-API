import { BadRequestException, Body, Get, Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";

@Injectable()
export class UserService {


    constructor(private readonly prisma: PrismaService) {

    }

    async create(data: CreateUserDTO) {

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
    
        return {message: 'usuario criado com sucesso', user}
   
    }




    async list() {
        return this.prisma.user.findMany()
    }



    
    async show(@Param('id', ParseIntPipe) id: number) {
        
        await this.verification(id)
        
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }
    


    async update(data: UpdateUserDTO, id:number) {

        await this.verification(id)

        const user = await this.prisma.user.update({
            data, 
            where: {
                id
            }
        })

        return {message: 'usuario atualizado com sucesso', user}

    }




    async verification(id: number) {
        
        const user = await this.prisma.user.count({
            where: {
                id
            }
        })

        if (!user) {
            throw new BadRequestException('esse usuario não existe')
        }

        return user

    }




    async delete(id: number) {

        await this.verification(id)

        const deleteUser = await this.prisma.user.delete({
            where: {
                id
            }
        })
        
        return {message: 'usuario deletado com sucesso', deleteUser}
    }


}