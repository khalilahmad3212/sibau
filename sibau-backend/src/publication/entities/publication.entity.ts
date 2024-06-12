import { Employee } from '../../employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Publication' })
export class Publication {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Title: string;

  @Column({ length: 100 })
  Authors: string;

  @Column({ length: 200 })
  Link: string;

  @Column('date')
  Year: Date;

  @Column({ length: 50 })
  JounalName: string;

  @Column()
  Type: string;

  @ManyToOne(() => Employee, (employee) => employee.Publications, {
    nullable: true,
  })
  @JoinColumn({ name: 'EmployeeId' })
  Employee: Employee;
}
