import { BaseEntity, Column, Entity,OneToOne,ManyToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Assessments } from "./Assessments.entity";
import { User } from "./user.entity";
import { Results } from "./results.entity";
@Entity('DailyAssessment')
export class DailyAssessment extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    @Column("date")
    date: Date;
    @Column("varchar",{ array:true})
    answer: string[];
    @Column({
        type: 'bit'
    })
    active:boolean ;
    // @ManyToOne(() => Assessments, Assessments => Assessments.AssessmentFK) // specify inverse side as a second parameter
    // @JoinColumn({name:'AssessmentFK'})
    // AssessmentFk: Assessments;
 
    @ManyToOne(() => User, User => User.id) // specify inverse side as a second parameter
    @JoinColumn({name:'PatientFK'})
    PatientFK: User;

    @ManyToOne(() => Assessments, Assessments => Assessments.DailyAssessmentFK) // specify inverse side as a second parameter
    // @JoinColumn({name:'level'})
    AssessmentFk:Assessments;

    
}