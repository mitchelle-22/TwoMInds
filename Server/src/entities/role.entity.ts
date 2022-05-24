import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./userRole.entity";

@Entity('role')
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;
 

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'varchar'
    })
    description: string;
    @Column({
        type: 'bit'
    })
    active: boolean;
    
    @OneToOne(() => UserRole, userRole => userRole.roleId) // specify inverse side as a second parameter
    UserRole: UserRole;
}