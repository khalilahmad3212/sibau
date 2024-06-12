import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entity';
import { DepartmentModule } from 'src/department/department.module';
import { CampusModule } from '../campus/campus.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    DepartmentModule,
    CampusModule
  ],

  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService, TypeOrmModule.forFeature([Employee])],
})
export class EmployeeModule { }
