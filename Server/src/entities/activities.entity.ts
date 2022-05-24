import { BaseEntity, Column, Entity, OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { Recomendations } from "./recommendation.entity";

@Entity('Activities')
export class Activities extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    @Column("varchar")
    name: string;
    @Column("varchar")
    Description: string;
    @Column({
        type: 'varchar'
    })
    img:string;
    @Column({
        type: 'varchar'
    })
    audio:string;
    @Column({
        type: 'bit'
    })
    active:boolean ;
 
    @OneToMany(() => Recomendations, Recomendations => Recomendations.id)
    ActivityFK: Recomendations;

    
 
}