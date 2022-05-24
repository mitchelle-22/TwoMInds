import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from 'src/Repositories/role.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { UserRoleService } from './user_role.service';
import { UserRoleController } from './user_role.controller';
import { UserRoleRepository } from 'src/Repositories/userRole.repository';


@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository,UserRepository,UserRoleRepository])],
  controllers: [UserRoleController],
  providers: [UserRoleService]
})
export class UserRoleModule {}
