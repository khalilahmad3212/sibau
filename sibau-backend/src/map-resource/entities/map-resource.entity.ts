import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MapResource' })
export class MapResource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  key: string;

  @Column()
  value: string;

  @Column({ nullable: true, length: 100 })
  page: string;

  @Column({ nullable: true })
  description: string;
}
