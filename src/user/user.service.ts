import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { UpdateUserDTO } from "src/dto/update-user-dto";
import { PrismaService } from "src/Prisma/prisma.Service";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {
        
    }

    async create(data: CreateUserDTO) {

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
        
            return user;

        } catch (error) {
            console.log('não foi possivel criar usuario', error);
            throw new BadRequestException('não foi possivel criar usuário');
        }

    }

    async read() {
        return this.prisma.user.findMany();
    }

    async readOne(id: number) {

        try {

            const user = await this.prisma.user.findUnique({
                where: {
                    id
                }
            });

            if (!user) {
                return { message: 'usuario não encontrado' };
            }

            return user;

        } catch (error) {
            console.log(error);
            throw new NotFoundException('erro ao buscar');
        }

    }

    async update(data: UpdateUserDTO, id: number) {

        try {
            await this.verification(id);

            const user = await this.prisma.user.update({
                data,
                where: {
                    id
                }
            });

            return { message: 'usuário atualizado', user };

        } catch (error) {
            console.log(error);
            throw new BadRequestException('erro ao atualizar as informaçoes do usuario');
        }

    }

    async delete(id: number) {

        try {
            await this.verification(id);

            return this.prisma.user.delete({
                where: {
                    id
                }
            });

        } catch (error) {
            throw new BadRequestException('erro ao deletar');
        }

    }

    async verification(id: number) {

        const user = await this.prisma.user.count({
            where: {
                id: id
            }
        });

        if (!user) {
            throw new BadRequestException('id inválido');
        }

        return user;

    }

}
