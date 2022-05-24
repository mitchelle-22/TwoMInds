import { BookingStatus } from "src/entities/BookingStatus.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(BookingStatus)
export class BookingStatusRepository extends Repository<BookingStatus> {}