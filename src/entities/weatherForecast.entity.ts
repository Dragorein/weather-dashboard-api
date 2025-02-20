import { EWindDirection } from 'src/common/enums/weather.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Weather } from './weather.entity';

@Entity('weather')
export class WeatherForecast {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Weather, (weather) => weather.forecasts, {
    onDelete: 'CASCADE',
  })
  weather: Weather;

  @Column()
  condition: string;

  @Column()
  condition_img: string;

  @Column()
  humidity: number;

  @Column()
  cloud: number;

  @Column()
  wind_kph: number;

  @Column({ type: 'enum', enum: EWindDirection })
  wind_dir: EWindDirection;

  @Column()
  precip_mm: number;

  @Column()
  temp_c: number;

  @Column()
  temp_feel_c: number;

  @Column()
  windchill_c: number;

  @Column()
  heatindex_c: number;

  @Column()
  uv: number;

  @Column()
  gust_mph: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'boolean' })
  deleted: boolean;
}
