import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Gallery' })
export class Gallery {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Name: string;

  @Column({ type: 'enum', enum: ['IMAGE', 'VIDEO'] })
  Type: string;

  @Column({ nullable: true })
  event: string;

  @OneToOne(() => Department, { nullable: true })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
