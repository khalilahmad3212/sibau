import { Employee } from '../../employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Experience' })
export class Experience {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column('date')
  StartDate: Date;

  @Column('date')
  EndDate: Date;

  @Column({ length: 100 })
  Position: string;

  @Column({ length: 100 })
  Organization: string;

  @ManyToOne(() => Employee, (employee) => employee.Experiences, {
    nullable: true,
  })
  @JoinColumn({ name: 'EmployeeId' })
  Employee: Employee;
}
