import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWeatherTable1740027419960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'weather',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'city',
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
            name: 'temp_f',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'temp_feel_c',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'temp_feel_f',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'heat_index_c',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'heat_index_f',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'uv',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'time',
            type: 'time',
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
    await queryRunner.dropTable('weather');
  }
}
