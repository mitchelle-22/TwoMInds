import { Results } from "src/entities/results.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Results)
export class ResultsRepository extends Repository<Results> {
}