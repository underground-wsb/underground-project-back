import { Grave } from 'src/graves/entities/grave.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class DeadOne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  dateOfDeath: string;

  @ManyToOne(() => Grave, (grave) => grave.deadOnes)
  grave: Grave;
}
