import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateEventDto {
  @IsString()
  Title: string;

  @IsNumber()
  Cost: number;

  @IsString()
  OrganizorName: string;

  @IsString()
  OrganizorPhone: string;

  @IsString()
  OrganizorEmail: string;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  EndDate: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  StartDate: Date;

  @IsString()
  EventType: string;

  @IsString()
  @IsOptional()
  Image: string;

  @IsString()
  @IsOptional()
  PosterImage: string;

  @IsString()
  Venue: string;

  @IsNumber()
  Sort: number;

  @IsString()
  EmbededCode: string;

  @IsNumber()
  @IsOptional()
  DepartmentId: number;
}
