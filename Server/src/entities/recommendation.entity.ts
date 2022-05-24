import { BaseEntity, Column, Entity,ManyToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Activities } from "./activities.entity";
import { User } from "./user.entity";
@Entity('Recomendations')
export class Recomendations extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    // @Column("date")
    // date: Date;
    @Column("json")
    activity: object[];
    @Column({
        type: 'bit'
    })
    active:boolean ;
    @ManyToOne(() => Activities, activities => activities.ActivityFK) // specify inverse side as a second parameter
    // @JoinColumn({name:'RecomendationFK'},{array:})
    RecomendationFK: Activities;
    @ManyToOne(() => User, user => user.id) // specify inverse side as a second parameter
    @JoinColumn({name:'UserRecomendationFK'})
    UserRecomendationFK: User;
}
