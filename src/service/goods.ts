import { App, Inject, Provide } from '@midwayjs/decorator';
import {
  BaseMoleculerService,
  CoolMoleculer,
  Moleculer,
  MoleculerTransaction,
} from '@cool-midway/moleculer';
import { DemoAppGoodsEntity } from '../entity/goods';
import { IMidwayWebApplication } from '@midwayjs/web';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository, QueryRunner } from 'typeorm';
import { TestService } from './test';
import { TestEntity } from '../entity/test';

@Provide()
@CoolMoleculer({
  entity: DemoAppGoodsEntity,
  method: ['info', 'add', 'page'],
})
export class GoodsService extends BaseMoleculerService {
  @App()
  app: IMidwayWebApplication;

  @InjectEntityModel(DemoAppGoodsEntity)
  demoAppGoodsEntity: Repository<DemoAppGoodsEntity>;

  @Inject()
  testService: TestService;

  @Inject('moleculer:moleculer')
  moleculer: Moleculer;

  async info(params) {
    console.log(this.app);
    return params;
  }

  /**
   * 分布式事务
   * @param params
   * @param moleculerTransactionId
   * @param queryRunner
   * @param commit
   */
  @MoleculerTransaction()
  async testTransaction(
    params,
    moleculerTransactionId?,
    queryRunner?: QueryRunner
  ) {
    console.log('获得的参数', params);
    const aa = { xxx: 'goods服务' };
    await queryRunner.manager.save(TestEntity, aa);

    // 将事务id传给调用的远程服务方法
    await this.moleculer.call('order', 'goodsService', 'test', {
      moleculerTransactionId,
    });
    return { a: 1 };
  }
}
