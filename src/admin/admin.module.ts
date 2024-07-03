import { Module } from "@nestjs/common";
import { AdminController,} from "./admin.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AdminService } from "./admin.service";



@Module({
    imports: [PrismaModule],
    controllers: [AdminController],
    providers: [AdminService],
    exports: []
})
export class UserModule {}