import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class UserEntity {


    @PrimaryGeneratedColumn()
    id: string


    @Column()
    name: string


    @Column({
        unique: true
    })
    email: string

    @Column({
        unique: true
    })
    cpf: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    

}