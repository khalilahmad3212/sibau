import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateEmployeeDto {
  @IsString()
  FirstName: string;

  @IsString()
  LastName: string;

  @IsString()
  Designation: string;

  @IsString()
  Role: string;

  @IsString()
  Email: string;

  @IsString()
  CMS_id: string;

  @IsString()
  EmployeeId: string;

  @IsString()
  OfficeExtension: string;

  @IsString()
  OfficeAddress: string;

  @IsString()
  Type: string;

  @IsString()
  Skills: string;

  @IsString()
  Biography: string;

  @IsString()
  Image: string;

  @Transform(({ obj, key }) => {
    return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
  })
  @IsBoolean()
  Phd?: boolean;

  @IsString()
  CurrentStatus: string;

  @IsString()
  Message: string;

  @IsNumber()
  @IsOptional()
  BPS: number;

  @IsNumber()
  @IsOptional()
  Department: number;
}
