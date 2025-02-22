import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Forecast } from './weatherForecast.entity';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  country: string;

  @Column({ type: 'float' })
  lon: number;

  @Column({ type: 'float' })
  lat: number;

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

  @OneToMany(() => Forecast, (forecast) => forecast.weather, { cascade: true })
  forecasts: Forecast[];
}
