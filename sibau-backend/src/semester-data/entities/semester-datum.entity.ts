import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SemesterData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  departmentName: string;

  @Column({ type: 'integer' })
  semester: number;

  @Column({ type: 'text' })
  courses: string; // Store courses data as a JSON string
}
