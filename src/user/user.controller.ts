import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { LogInterceptor } from "src/interceptor/log.interceptor";

@UseInterceptors(LogInterceptor)
@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {


    }
    @Post()
    async create(@Body() data: CreateUserDTO) {

        return this.userService.create(data)
    }


    @Get()
    async list() {
        return this.userService.list()
    }


    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {

        return this.userService.show(id)
    }


    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {

        return this.userService.update(data,id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id)
    }

}