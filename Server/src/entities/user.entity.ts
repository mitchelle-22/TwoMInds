import { BaseEntity, Column, Entity, JoinColumn,Generated, OneToOne,OneToMany, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./userRole.entity";
import { DailyAssessment } from "./dailyassessment.entity";
import { Recomendations } from "./recommendation.entity";
import { Results } from "./results.entity";
import { Booking } from "./booking.entity";
import { Journal } from "./journal.entity";
@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: string;
  
    @Generated("uuid")
    @Column({
        name: 'uuid',
        type: 'varchar', unique  : true
    })
    uuid: string;
    // @Column({
    //     type: 'int'
    // })
    // role_id: number;

    @Column({
        type: 'varchar', unique  : true
    })
    email: string;

    @Column({
        type: 'varchar'
    })
    firstname: string;

    @Column({
        type: 'varchar'
    })
    phone: string;

    @Column({
        type: 'bit'
    })
    emailVerified: string;

    @Column({
        type: 'varchar'
    })
    password: string;
    @Column({
        type: 'bit'
    })
    profileComplete: boolean;
    @Column({
        type: 'varchar', default : 'Male'
    })
    gender: string;
    @Column({
        type: 'date'
    })
    last_login: Date;
    @Column({
        type: 'date'
    })
    created_at: Date;
    @Column({
        type: 'bit'
    })
    active: string;
    

    @OneToOne(() => UserRole, UserRole => UserRole.user, {cascade:true}) // specify inverse side as a second parameter
    @JoinColumn({name:'roleId'})
    roleId: User;

    @OneToMany(() => DailyAssessment, DailyAssessment => DailyAssessment.PatientFK) // specify inverse side as a second parameter
    PatientFK: DailyAssessment;

    @OneToMany(() => Recomendations, Recomendations => Recomendations.UserRecomendationFK)
    userFK: Recomendations;

    @OneToMany(() => Results, results => results.id) // specify inverse side as a second parameter
    UserResultFK: Results;
    @OneToMany(() => Booking, booking => booking.UserFk) // specify inverse side as a second parameter
    // @JoinColumn()  ManyToOne
    userBookFk: Booking;
    @OneToMany(() => Journal, journal => journal.UserJournalFk) // specify inverse side as a second parameter
    // @JoinColumn({name:'patientFk'})
    JournalFk:Journal;
}


