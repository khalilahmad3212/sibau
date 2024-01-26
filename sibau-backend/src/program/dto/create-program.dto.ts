import { IsNumber, IsString } from 'class-validator';
export class CreateProgramDto {
  @IsString()
  Name: string;

  @IsString()
  Duration: string;

  @IsString()
  Description: string;

  @IsString()
  Coordinator: string;
  
  @IsString()
  Link: string;

  @IsNumber()
  FocalPersonEmployeeId: number;
}
