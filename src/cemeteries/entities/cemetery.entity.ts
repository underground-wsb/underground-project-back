import { City } from 'src/cities/entities/city.entity';
import { Grave } from 'src/graves/entities/grave.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Cemetery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => City, (city) => city.cemeteries)
  city: City;

  @OneToMany(() => Grave, (grave) => grave.cemetery, {
    cascade: true,
  })
  graves: Grave[];
}
