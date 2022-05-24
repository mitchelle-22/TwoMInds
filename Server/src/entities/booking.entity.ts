import { BaseEntity, Column, Entity, ManyToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('booking')
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;

    @Column({
        type: 'varchar'
    })
    notes: string;
    @Column({
        type: 'date'
    })
    date: Date;
    @Column({
        type: 'varchar'
    })
    time: string;
    @Column({
        type: 'bit'
    })
    
    active: boolean;
    
    @ManyToOne(() => User, User => User.id) // specify inverse side as a second parameter
    @JoinColumn({name:'userfk'})
    UserFk: User;
    // @ManyToOne(() => User, User => User.userBookFk) // specify inverse side as a second parameter
    // @JoinColumn({name:'adminfk'})
    // AdminBookingFk: User;
}