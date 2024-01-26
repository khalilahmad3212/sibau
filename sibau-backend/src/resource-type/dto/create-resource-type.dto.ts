import { IsNumber, IsString } from 'class-validator';
export class CreateResourceTypeDto {
  @IsString()
  Name: string;

  @IsString()
  Link: string;

  @IsNumber()
  DepartmentId: number;
}
