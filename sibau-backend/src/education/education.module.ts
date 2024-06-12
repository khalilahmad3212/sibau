import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from './entities/education.entity';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports:[TypeOrmModule.forFeature([Education]), EmployeeModule],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
