import { Employee } from 'src/employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Recoginition' })
export class Recognition {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Title: string;

  @Column({ length: 100, nullable: true })
  Designation: string;

  @Column({ length: 100, nullable: true })
  Link: string;

  @Column({ length: 100 })
  Organization: string;

  @Column({
    type: 'enum',
    enum: ['AWARD', 'ACHEIVEMENT', 'CERTIFICATIE', 'MEDAL', 'MEMBERSHIP'],
  })
  Type: string;

  @Column('date', { nullable: true })
  StartDate: Date;

  @Column('date')
  EndDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.Recognitions, {
    nullable: true,
  })
  @JoinColumn({ name: 'EmployeeId' })
  Employee: Employee;
}
