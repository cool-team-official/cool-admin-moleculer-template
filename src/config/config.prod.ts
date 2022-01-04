import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.orm = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'cool',
    // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
    synchronize: false,
    // 打印日志
    logging: false,
    // 字符集
    charset: 'utf8mb4',
    // 驱动
    driver: require('mysql2'),
    // 设置时区
    timezone: '+8:00',
  };

  config.logger = {
    coreLogger: {
      consoleLevel: 'ERROR',
    },
  };

  // cool配置
  config.cool = {
    // 是否初始化模块数据库
    initDB: false,
  };

  return config;
};
