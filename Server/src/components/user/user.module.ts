import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from 'src/Repositories/role.repository';
import { UserRepository } from '../../Repositories/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository,UserRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
