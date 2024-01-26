import { Module } from '@nestjs/common';
import { FileDataService } from './file-data.service';
import { FileDataController } from './file-data.controller';
import { FileDatum } from './entities/file-datum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FileDatum])],

  controllers: [FileDataController],
  providers: [FileDataService],
})
export class FileDataModule {}
