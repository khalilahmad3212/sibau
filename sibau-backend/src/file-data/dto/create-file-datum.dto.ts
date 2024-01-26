import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateFileDatumDto {
  @IsString()
  filepath: string;
  @IsString()
  filename: string;
  @IsString()
  fileType: string;
  @IsString()
  page: string;
  @IsString()
  deadline?: string;

  @IsNumber()
  fileSize: number;
  @IsString()
  description: string;
  @IsDate()
  uploadAt: Date;
}
