import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWeatherTable1740027419960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'weather',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
            type: 'float',
            isNullable: false,
          },
          {
            name: 'wind_dir',
            type: 'varchar', // Enums are stored as strings in TypeORM migrations
            isNullable: false,
          },
          {
            name: 'temp_c',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'temp_feel_c',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'windchill_c',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'heatindex_c',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'uv',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'gust_mph',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'datetime',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('weather');
  }
}
