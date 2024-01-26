import { Deptwiseprogramspecilization } from 'src/deptwise-program-specailzation/entities/deptwise-program-specailzation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
@Entity({ name: 'Program' })
export class Program {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'enum',
    enum: [
      'UNDERGRADUATE',
      'GRADUATE',
      'POSTGRADUATE',
      'FOUNDATION',
      'SUMMER',
      'WINTER',
    ],
  })
  Name: string;

  @Column({ length: 50 })
  Duration: string;

  @Column({ nullable: true, length: 1000 })
  Description: string;

  @Column({ length: 50 })
  Coordinator: string;

  @Column({ length: 100 })
  Link: string;

  @OneToOne(() => Employee)
  @JoinColumn({ name: 'FocalPersonEmployeeId' })
  FocalPerson: Employee;

  @OneToMany(
    () => Deptwiseprogramspecilization,
    (deptwiseprogramspecilization) => deptwiseprogramspecilization.Program,
    {
      nullable: true,
    },
  )
  Deptwiseprogramspecilizations: Deptwiseprogramspecilization[];
}
