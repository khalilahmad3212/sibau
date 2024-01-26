import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeInfoDto } from './create-employee-info.dto';
import { IsJSON } from 'class-validator';

export class UpdateEmployeeInfoDto extends PartialType(CreateEmployeeInfoDto) {}

// Define the Publication and Qualification types (same as before)
