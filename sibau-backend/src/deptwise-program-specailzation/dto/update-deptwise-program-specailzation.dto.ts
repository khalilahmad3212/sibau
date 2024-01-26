import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateDeptwiseProgramSpecailzationDto } from './create-deptwise-program-specailzation.dto';

export class UpdateDeptwiseProgramSpecailzationDto extends PartialType(
  CreateDeptwiseProgramSpecailzationDto,
) {
  // @IsNumber()
  // ProgramId?: number;
  // // @IsNumber()
  // DepartmentId?: number;
  // // @IsNumber()
  // SpecializationId?: number;
}
