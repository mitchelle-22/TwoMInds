import { type } from "os";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
import { User } from "./user.entity";
@Entity('userRole')
export class UserRole extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;
    // @Column({
    //     type: 'int'
    // })
    // role_id: number;
    // @Column({
    //     type: 'varchar2'
    // })
    // user_role_id: string;
    @Column({
        type: 'bit'
    })
    active:boolean ;
    @OneToOne(() => Role, role => role.id) // specify inverse side as a second parameter
    @JoinColumn()
    roleId: Role;

    @OneToOne(() => User, user => user.roleId)   // specify inverse side as a second parameter
    @JoinColumn({name:'userId'})
    user: UserRole;


}