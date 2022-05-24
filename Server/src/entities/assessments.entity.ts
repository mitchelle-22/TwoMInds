import { BaseEntity, Column, Entity, OneToMany,ManyToOne,JoinColumn,PrimaryGeneratedColumn } from "typeorm";
import { DailyAssessment } from "./dailyassessment.entity";
import { Results } from "./results.entity";
@Entity('Assessments')
export class Assessments extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    @Column("varchar", { array: true })
    image: string[];
    @Column("varchar", { array: true })
    Question: string[];
    @Column({
        type: 'date'
    })
    Date:string ;
    @Column({
        type: 'int'
    })
    level:Number ;
    @Column({
        type: 'bit'
    })
    active:boolean ;
    @OneToMany(() => DailyAssessment,  (DailyAssessment) =>  DailyAssessment.AssessmentFk) // specify inverse side as a second parameter
    // @JoinColumn({name:'DailyAssessFK'})
    DailyAssessmentFK: DailyAssessment;
 
    @ManyToOne(() => Results, results => results.AssessmentFK) // specify inverse side as a second parameter
    ResultFk: Results;
}