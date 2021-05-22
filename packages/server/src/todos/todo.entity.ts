import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  // @ApiPropertyはOpenAPI用のデコレーター
  @ApiProperty({})
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({})
  @Column
  contents: string;
}
