import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateWeatherForcastTable1740036508757
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'forecast',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'weather_id',
            type: 'uuid',
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
    await queryRunner.createForeignKey(
      'forecast',
      new TableForeignKey({
        columnNames: ['weather_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'weather',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('forecast');
    const foreignKey = table?.foreignKeys.find((fk) =>
      fk.columnNames.includes('weather_id'),
    );

    if (foreignKey) {
      await queryRunner.dropForeignKey('forecast', foreignKey);
    }

    await queryRunner.dropTable('weather_forecast');
  }
}
