import { Department } from 'src/department/entities/department.entity';
import { Specialization } from 'src/specialization/entities/specialization.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'Resource' })
export class Resource {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column({ length: 100 })
  Name: string;

  @Column({ length: 100 })
  ShortName: string;

  @Column({ type: 'enum', enum: ['FILE', 'URL'] })
  Link: string;

  @Column({ length: 100 })
  AltText: string;

  @Column({ nullable: true })
  LinkLocation: string;

  @ManyToOne(() => Department, (department) => department.Resources, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
