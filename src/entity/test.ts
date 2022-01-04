import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('test')
export class TestEntity extends BaseEntity {
  @Column({ comment: '描述' })
  xxx: string;
}
