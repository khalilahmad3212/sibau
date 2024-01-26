import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
@Entity({ name: 'Organization' })
export class Organization {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Name: string;

  @Column({ nullable: true, length: 1000 })
  History: string;

  @Column({ nullable: true, length: 1000 })
  Description: string;

  @Column({ length: 1000 })
  Mission: string;

  @Column({ length: 1000 })
  Vision: string;

  @Column({ nullable: true, length: 100 })
  Founder: string;

  @Column({ nullable: true })
  Logo: string;

  @OneToOne(() => Employee, { nullable: true })
  @JoinColumn({ name: 'VCEmployeeId' })
  VCEmployee: Employee;

  @OneToOne(() => Employee, { nullable: true })
  @JoinColumn({ name: 'RegistrarEmployeeId' })
  RegistrarEmployee: Employee;
}
