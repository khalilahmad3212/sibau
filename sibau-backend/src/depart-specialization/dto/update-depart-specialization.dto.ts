import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartSpecializationDto } from './create-depart-specialization.dto';

export class UpdateDepartSpecializationDto extends PartialType(CreateDepartSpecializationDto) {}
