import { Module } from "@nestjs/common";
import { UserService } from "./User.Service";
import { PrismaModule } from "src/Prisma/Prisma.Module";
import { UserController } from "./User.Controler";



@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {

}