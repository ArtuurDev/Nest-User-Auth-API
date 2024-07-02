import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrismaModule } from "src/prisma/prisma.module";



@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService],
    exports: []
})
export class UserModule {}