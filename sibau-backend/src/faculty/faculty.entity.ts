import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Department } from '../department/entities/department.entity';
import { Employee } from '../employee/entities/employee.entity'

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @OneToMany(() => Department, department => department.Faculty)
  Departments: Department[];

  @OneToOne(() => Employee)
  @JoinColumn()
  Dean: Employee;
}
