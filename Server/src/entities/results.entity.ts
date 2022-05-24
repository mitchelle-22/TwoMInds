import { BaseEntity, Column, Entity, OneToMany,ManyToOne,JoinColumn,PrimaryGeneratedColumn } from "typeorm";
import { Assessments } from "./Assessments.entity";
import { DailyAssessment } from "./dailyassessment.entity";
import { User } from "./user.entity";
@Entity('Results')
export class Results extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    @Column("int")
    assessmentTaken: number;
    @Column({
        type: 'varchar'
    })
    status:string ;
    @Column({
        type: 'varchar'
    })
    feedback:string ;
    @Column({
        type: 'int'
    })
    rate:number ;
    @Column({
        type: 'varchar', array: true
    })
    Answers:string [];
    @Column({
        type: 'bit'
    })
    active:boolean ;
    
    @OneToMany(() => Assessments, Assessment => Assessment.ResultFk) // specify inverse side as a second parameter
    @JoinColumn({name:'AssessmentFK'})
    AssessmentFK: Assessments;
    @ManyToOne(() => User, user => user.id) // specify inverse side as a second parameter
    @JoinColumn({name:'PatientFK'})
    PatientResultFK: User;
}