import { DailyAssessment } from "../entities/dailyassessment.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(DailyAssessment)
export class DailyAssessmentRepository extends Repository<DailyAssessment> {}