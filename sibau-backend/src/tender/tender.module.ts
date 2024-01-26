import { Module } from '@nestjs/common';
import { TenderService } from './tender.service';
import { TenderController } from './tender.controller';
import { Tender } from './entities/tender.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tender])],

  controllers: [TenderController],
  providers: [TenderService],
})
export class TenderModule {}
