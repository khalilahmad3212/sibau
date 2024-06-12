import { Employee } from '../employee/entities/employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// campus.entity.ts


@Entity()
export class Campus {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Name: string;

  @Column({ type: 'text', nullable: true })
  History: string;

  @Column({ type: 'text', nullable: true })
  Vision: string;

  @Column({ type: 'text', nullable: true })
  VisionImage: string;

  @Column({ type: 'text', nullable: true })
  Mission: string;

  @Column({ type: 'text', nullable: true })
  MissionImage: string;

  @Column({ type: 'text', nullable: true })
  Description: string;

  @Column({ length: 15, nullable: true })
  Phone: string;

  @Column({ type: 'text', nullable: true })
  Address: string;

  @Column({ nullable: true })
  Accreditation: string;

  @Column({ type: 'text', nullable: true })
  Logo: string; // Assuming logo is a string representing image URL

  @Column({ type: 'text', nullable: true })
  Cover: string; // Assuming cover is a string representing image URL

  @Column({ type: 'text', nullable: true })
  Gallery: string; // Assuming gallery is a string representing image URLs

  @OneToMany(() => Employee, (employee) => employee.Campus, {
    nullable: true,
  })
  Employees: Employee[];
}
