import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./userRole.entity";

@Entity('timeslot')
export class Timeslot extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;
 

    @Column({
        type: 'varchar',
        array : true
    })
    booked: string[];

    @Column({
        type: 'varchar',
        array : true
    })
    available: string[];
    @Column({
        type: 'date'
    })
    date: Date;
    @Column({
        type: 'bit'
    })
    
    active: boolean;
    
    // @OneToOne(() => UserRole, userRole => userRole.roleId) // specify inverse side as a second parameter
    // UserRole: UserRole;
}