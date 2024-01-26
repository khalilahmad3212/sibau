import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'ResourceType' })
export class ResourceType {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 50 })
  Name: string;

  @Column({ length: 200 })
  Link: string;

  @ManyToOne(() => Department, (department) => department.ResourceTypes, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
