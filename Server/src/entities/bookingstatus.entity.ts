import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('bookingStatus')
export class BookingStatus extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;

    @Column({
        type: 'varchar'
    })
    name: string;
    @Column({
        type: 'date'
    })
    description: Date;
    @Column({
        type: 'varchar'
    })
    
    active: boolean;
    
    // @OneToOne(() => UserRole, userRole => userRole.roleId) // specify inverse side as a second parameter
    // UserRole: UserRole;
}