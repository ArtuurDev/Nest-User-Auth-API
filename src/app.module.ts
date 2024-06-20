import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user-entity';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    
    type: 'postgres',
    host: 'localhost',
    port: 3000,
    username: 'nest-user-api',
    password: 'artur92546331',
    database: 'nest-user-api',
    entities: [UserEntity],
    synchronize: true

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
