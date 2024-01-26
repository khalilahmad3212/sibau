import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateSkillDto } from './create-skill.dto';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  @IsString()
  Name: string;
}
