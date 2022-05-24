import { Booking } from "src/entities/booking.entity";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Booking)
export class BookingRepository extends Repository<Booking> {}