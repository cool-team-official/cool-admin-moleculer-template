import { Provide } from '@midwayjs/decorator';
import { BaseMoleculerService, CoolMoleculer } from '@cool-midway/moleculer';
import { TestEntity } from '../entity/test';

/**
 * 描述
 */
@Provide()
@CoolMoleculer({
  entity: TestEntity,
  method: ['info', 'add', 'page'],
  listQueryOp: {
    fieldEq: ['id'],
  },
})
export class TestService extends BaseMoleculerService {
  /**
   * 描述
   */
  async test() {}
}
