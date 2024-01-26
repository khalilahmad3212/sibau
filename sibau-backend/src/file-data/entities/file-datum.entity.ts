import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'FileData' })
export class FileDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  filepath: string;

  @Column({ nullable: true })
  page: string;

  @Column({ nullable: true })
  deadline: string;

  @Column({ nullable: true })
  uploadAt: Date;

  @Column({ nullable: true })
  fileType: string;

  @Column({ nullable: true })
  fileSize: number;

  @Column({ nullable: true })
  description: string;
}
