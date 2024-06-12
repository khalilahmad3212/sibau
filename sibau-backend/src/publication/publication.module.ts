import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './entities/publication.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Publication]), EmployeeModule],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule { }
