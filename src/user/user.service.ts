import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "./entity/user-entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "./dto/create-user-dto";

@Injectable()
export class UserService {


    constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>) {


    }


    async create(data: CreateUserDTO) {
        
        const newUser = this.repository.create({
            ...data
        }) 
        
        return await this.repository.save(newUser)
        
    }
    




}