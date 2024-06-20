import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "./entity/user-entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {


    constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>) {


    }




}