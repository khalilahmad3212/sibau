import { IsDate } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Employee } from '../../employee/entities/employee.entity';
import { CreateEducationDto } from './create-education.dto';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {

    @IsString()
	Link:string;

    @IsString()
    Major:string;

    @IsString()
	DegreeType:string;

    @IsString()
    Descripiton:string

    @IsString()
	Institute:string;

    @IsDate()
	StartDate:Date;
	
    @IsDate()
    EndDate:Date;
    
    Employee: Employee;
}
