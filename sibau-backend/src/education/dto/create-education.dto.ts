import { IsDate, IsString } from "class-validator";
import { Employee } from "../../employee/entities/employee.entity";
export class CreateEducationDto {

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
