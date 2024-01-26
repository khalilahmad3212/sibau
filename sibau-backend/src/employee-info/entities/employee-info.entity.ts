import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class EmployeeInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Employee, (employee) => employee.EmployeeId)
  @Column({ unique: true })
  employee: string;

  @Column('text')
  biography: string;

  @Column('text', { nullable: true })
  qualifications: string;

  @Column('text', { nullable: true })
  coursesTaught: string;

  @Column('text', { nullable: true })
  overView: string;

  @Column('text', { nullable: true })
  publications: string;
}

// Define Qualification and Publication types as interfaces
export interface QualificationInfo {
  degree: string;
  from: string;
  major: string;
  year: number;
}

export interface PublicationInfo {
  title: string;
  authors: string[];
}
