import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user-dto";


@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {


    }

    @Post() 
    async create(@Body() data: CreateUserDTO) {

        return this.userService.create(data)

    }
    

}