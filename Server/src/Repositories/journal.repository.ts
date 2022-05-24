import { Journal } from "src/entities/journal.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Journal)
export class JournalRepository extends Repository<Journal> {}