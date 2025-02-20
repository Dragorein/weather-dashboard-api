import { EWindDirection } from 'src/common/enums/weather.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  region: string;

  @Column()
  country: string;

  @Column()
  lon: number;

  @Column()
  lat: number;

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
  heat_index_c: number;

  @Column()
  uv: number;

  @Column()
  gust_kph: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  datetime: Date;
}
