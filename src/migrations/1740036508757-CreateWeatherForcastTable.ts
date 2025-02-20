import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWeatherForcastTable1740036508757
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'weather_forecast',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'region',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lon',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'lat',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'condition',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'condition_img',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'humidity',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'cloud',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'wind_kph',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'wind_dir',
            type: 'enum',
            enum: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
            isNullable: false,
          },
          {
            name: 'precip_mm',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'temp_c',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'temp_feel_c',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'windchill_c',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'heatindex_c',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'uv',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'gust_kph',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deleted',
            type: 'boolean',
            default: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('weather_forecast');
  }
}
