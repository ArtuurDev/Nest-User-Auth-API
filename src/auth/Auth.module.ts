import { Module } from "@nestjs/common";
import { JwtModule} from "@nestjs/jwt";
import { PrismaModule } from "src/Prisma/Prisma.Module";
import { UserModule } from "src/User/User.Module";
import { AuthService } from "./Auth.service";
import { AuthController } from "./Auth.Controller";


@Module({
    imports: [JwtModule.register({
        secret: 'fsdbuyvbcd553653665524442125ejhbhhvvWWWDEDD!!SEASAFC¨&)()(&¨$&&&'

    }),
    UserModule,
    PrismaModule],
    controllers: [AuthController],
    providers: [AuthService]

})
export class AuthModule {

}