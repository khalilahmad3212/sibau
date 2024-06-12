import { Employee } from '../../employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Education' })
export class Education {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 200 })
  Link: string;

  @Column()
  Major: string;

  @Column({ type: 'enum', enum: ['MATRIC', 'INTERMEDIATE', 'BS'] })
  DegreeType: string;

  @Column({ nullable: true, length: 1000 })
  Descripiton: string;

  @Column()
  Institute: string;

  @Column('date')
  StartDate: Date;

  @Column('date')
  EndDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.Educations, {
    nullable: true,
  })
  @JoinColumn({ name: 'EmployeeId' })
  Employee: Employee;
}
