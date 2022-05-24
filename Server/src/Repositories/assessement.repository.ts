import { Assessments } from "../entities/Assessments.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Assessments)
export class AssessmentRepository extends Repository<Assessments> {}