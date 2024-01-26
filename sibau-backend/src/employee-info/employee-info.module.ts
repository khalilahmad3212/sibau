import { Module } from '@nestjs/common';
import { EmployeeInfoService } from './employee-info.service';
import { EmployeeInfoController } from './employee-info.controller';
import { EmployeeInfo } from './entities/employee-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeInfo]), EmployeeModule],

  controllers: [EmployeeInfoController],
  providers: [EmployeeInfoService],
})
export class EmployeeInfoModule {}
