import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserService } from "./User.Service";
import { CreateUserDTO } from "src/dto/create-user-dto";
import { UpdateUserDTO } from "src/dto/update-user-dto";



@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
        
    }    

    @Post()
    async create(@Body() data: CreateUserDTO) {

        return this.userService.create(data)
        

    }

    @Get()
    async read() {

        return this.userService.read()

    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {

        return this.userService.readOne(id)

    }

    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number,) {

        return this.userService.update(data, id)

    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {

        return this.userService.delete(id)

    }


    

}