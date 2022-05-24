import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Response } from 'express'; 
import { JournalService } from './journal.service';
@Controller('journal')
export class JournalController {
    constructor(private journal: JournalService) {}
 
    @Get()
    getAllJournals() {
      return this.journal.getAllJournals();
    }
    @Get('/:id')
    getJournalById(@Param('id') id : string) {
      return this.journal.getJournalById(id);
    }
    @Get('/date')
    getJournalByUserId(@Body() date:Response) {
      return this.journal.getJournalByDate(date);
    }
    @Get('/user/:id')
    getjournalByDateId(@Param('id') id : string) {
      return this.journal.getJournalByUserId(id);
    }
    @Post()
    addJournal(@Body() journalObj:Response){
      return this.journal.addJournal(journalObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() journal: any){
        this.journal.updateJournal(id,journal);
    }
    @Delete('/:id')
    async removeJournal(@Param('id') id : number) {
        return await this.journal.removeJournal(id);
    }

}
