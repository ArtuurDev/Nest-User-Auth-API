import { Module } from "@nestjs/common";
import { UserService } from "./User.Service";
import { PrismaModule } from "src/Prisma/Prisma.Module";
import { UserController } from "./User.Controler";
import { AuthModule } from "src/auth/Auth.module";



@Module({
    imports: [PrismaModule, AuthModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {

}