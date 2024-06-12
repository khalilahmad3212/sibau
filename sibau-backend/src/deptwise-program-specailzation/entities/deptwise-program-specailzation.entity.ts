import { Department } from '../../department/entities/department.entity';
import { Program } from '../../program/entities/program.entity';
import { Specialization } from '../../specialization/entities/specialization.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'DeptwiseProgramSpecailzation' })
export class Deptwiseprogramspecilization {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne(() => Program, { nullable: true })
  @JoinColumn({ name: 'ProgramId' })
  Program: Program;

  @ManyToOne(
    () => Department,
    (department) => department.Deptwiseprogramspecilizations,
    { nullable: true },
  )
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;

  @ManyToOne(
    () => Specialization,
    (specialization) => specialization.Deptwiseprogramspecilizations,
    { nullable: true },
  )
  @JoinColumn({ name: 'SpecializationId' })
  Specialization: Specialization;
}
