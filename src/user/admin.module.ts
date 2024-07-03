import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AdminController,} from "./admin.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AdminService } from "./admin.service";
import { UseIdCheckMiddleware } from "src/middleware/use-id-check-middleware";



@Module({
    imports: [PrismaModule],
    controllers: [AdminController],
    providers: [AdminService],
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