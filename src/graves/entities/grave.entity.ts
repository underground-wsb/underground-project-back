import { Cemetery } from 'src/cemeteries/entities/cemetery.entity';
import { DeadOne } from 'src/deadOnes/entities/deadOne.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Grave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @ManyToOne(() => Cemetery, (cemeteries) => cemeteries.graves)
  cemetery: Cemetery;

  @OneToMany(() => DeadOne, (deadOnes) => deadOnes.grave, {
    cascade: true,
  })
  deadOnes: DeadOne[];
}
