import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campus } from './campus.entity';
import { CampusController } from './campus.controller';
import { CampusService } from './campus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Campus])],
  controllers: [CampusController],
  providers: [CampusService],
  exports: [CampusService],
})
export class CampusModule { }
