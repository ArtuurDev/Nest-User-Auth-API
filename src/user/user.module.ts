import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserService } from "./user.service";
import { UseIdCheckMiddleware } from "src/middleware/use-id-check-middleware";
import { UserController } from "./user.controller";



@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService],
    exports: []
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UseIdCheckMiddleware).forRoutes({
            path: 'admin/:id',
            method: RequestMethod.ALL
        })
    }
}