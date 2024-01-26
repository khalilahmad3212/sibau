import { Module } from '@nestjs/common';
import { DepartSpecializationService } from './depart-specialization.service';
import { DepartSpecializationController } from './depart-specialization.controller';
import { DepartSpecialization } from './entities/depart-specialization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DepartSpecialization])],

  controllers: [DepartSpecializationController],
  providers: [DepartSpecializationService],
})
export class DepartSpecializationModule {}
