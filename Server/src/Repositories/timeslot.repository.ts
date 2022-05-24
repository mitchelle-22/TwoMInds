import { Timeslot } from "src/entities/timeslot.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Timeslot)
export class TimeslotRepository extends Repository<Timeslot> {}