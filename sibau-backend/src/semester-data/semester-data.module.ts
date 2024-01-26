import { Module } from '@nestjs/common';
import { SemesterDataService } from './semester-data.service';
import { SemesterDataController } from './semester-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SemesterData } from './entities/semester-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SemesterData])],

  controllers: [SemesterDataController],
  providers: [SemesterDataService],
})
export class SemesterDataModule {}
