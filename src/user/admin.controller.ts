import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { LogInterceptor } from "src/interceptor/log.interceptor";

@UseInterceptors(LogInterceptor)
@Controller('admin')
export class AdminController {


    constructor(private readonly adminService: AdminService) {


    }
    @Post()
    async create(@Body() data: CreateUserDTO) {

        return this.adminService.create(data)
    }


    @Get()
    async list() {
        return this.adminService.list()
    }


    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {

        return this.adminService.show(id)
    }


    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {

        return this.adminService.update(data,id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.adminService.delete(id)
    }

}