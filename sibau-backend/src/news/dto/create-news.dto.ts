import { IsDate, IsString, IsNumber, isString } from 'class-validator';
export class CreateNewsDto {
  @IsString()
  Title: string;

  @IsString()
  Date: Date;

  @IsString()
  Descripiton: string;

  @IsString()
  Image: string;

  @IsString()
  Heading: string;

  @IsNumber()
  Sort: number;

  @IsNumber()
  DepartmentId: number;
}
