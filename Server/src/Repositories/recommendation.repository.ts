import { Recomendations } from "src/entities/recommendation.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Recomendations)
export class RecomendationsRepository extends Repository<Recomendations> {}