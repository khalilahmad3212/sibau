import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from './faculty.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { FacultyService } from './faculty.service';
import { FacultyController } from './faculty.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty]), EmployeeModule],
  providers: [FacultyService],
  controllers: [FacultyController],
  exports: [FacultyService],
})
export class FacultyModule { }
