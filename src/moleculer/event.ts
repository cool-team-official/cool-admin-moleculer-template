import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import { MoleculerEvent, MoleculerEventHandler } from '@cool-midway/moleculer';

/**
 * moleculer 事件处理
 */
@Provide()
@Scope(ScopeEnum.Singleton)
@MoleculerEvent()
export class MoleculerHandler {
  /**
   * 注册事件
   * @param params
   */
  @MoleculerEventHandler()
  async test(params) {
    console.log('收到事件test', params);
  }
}
