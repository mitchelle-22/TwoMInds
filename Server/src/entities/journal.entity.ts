import { BaseEntity, Column, Entity, ManyToOne, JoinColumn,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('journal')
export class Journal extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;
 

    @Column({
        type: 'varchar'
    })
    title: string[];

    @Column({
        type: 'varchar'
    })
    description: string;
    @Column({
        type: 'varchar'
    })
    feedback: string;
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
    @JoinColumn({name:'patientFk'})
    UserJournalFk:User;
    @ManyToOne(() => User, User => User.id) // specify inverse side as a second parameter
    @JoinColumn({name:'adminFk'})
    AdminJournalFk:User;
}