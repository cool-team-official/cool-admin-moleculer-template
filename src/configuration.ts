import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as orm from '@midwayjs/orm';
import * as moleculer from '@cool-midway/moleculer';
import * as redis from '@cool-midway/redis';
import * as core from '@cool-midway/core';

@Configuration({
  imports: [
    // orm
    orm,
    // cool 核心
    core,
    // redis
    redis,
    // 微服务，依赖redis 所以要放在redis 之后
    moleculer,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  // 应用启动完成
  async onReady() {}
}
