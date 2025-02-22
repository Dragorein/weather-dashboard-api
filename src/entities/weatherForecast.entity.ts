import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Weather } from './weather.entity';

@Entity('forecast')
export class Forecast {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Weather, (weather) => weather.forecasts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'weather_id' })
  weather: Weather;

  @Column()
  condition: string;

  @Column()
  condition_img: string;

  @Column({ type: 'int' })
  humidity: number;

  @Column({ type: 'int' })
  cloud: number;

  @Column({ type: 'float' })
  precip_mm: number;

  @Column({ type: 'float' })
  temp_c: number;

  @Column({ type: 'float' })
  temp_f: number;

  @Column({ type: 'float' })
  temp_feel_c: number;

  @Column({ type: 'float' })
  temp_feel_f: number;

  @Column({ type: 'float' })
  heat_index_c: number;

  @Column({ type: 'float' })
  heat_index_f: number;

  @Column({ type: 'float' })
  uv: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  time: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'boolean' })
  deleted: boolean;
}
