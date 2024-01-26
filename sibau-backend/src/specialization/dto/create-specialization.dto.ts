import { IsNumber, IsString } from 'class-validator';

export class CreateSpecializationDto {
  @IsString()
  Name: string;

  @IsNumber()
  ResourceId: number;
}
