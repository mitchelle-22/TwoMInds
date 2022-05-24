import { Activities } from "src/entities/activities.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Activities)
export class ActivitiesRepository extends Repository<Activities> {}