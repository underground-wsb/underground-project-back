import { Cemetery } from 'src/cemeteries/entities/cemetery.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cemetery, (cemetery) => cemetery.city, {
    cascade: true,
  })
  cemeteries: Cemetery[];
}
