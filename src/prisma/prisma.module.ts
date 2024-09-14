import { Injectable, Module } from "@nestjs/common";
import { UserModule } from "src/User/User.Module";
import { UserService } from "src/User/User.Service";
import { PrismaService } from "./prisma.Service";

@Module({
    exports: [PrismaService],
    providers: [PrismaService],
    
})
export class PrismaModule {

}