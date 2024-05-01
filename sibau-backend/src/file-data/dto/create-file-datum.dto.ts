import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFileDatumDto {
  @IsString()
  filepath: string;
  @IsString()
  filename: string;
  @IsString()
  fileType: string;

  @IsString()
  @IsOptional()
  page: string;
  
  @IsString()
  @IsOptional()
  deadline?: string;

  @IsNumber()
  fileSize: number;
  @IsString()
  @IsOptional()
  description: string;
  @IsDate()
  uploadAt: Date;
}
