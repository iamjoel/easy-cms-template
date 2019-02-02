# Easy CMS 模板
推荐使用 [Easy CMS 生成工具](https://github.com/iamjoel/easy-cms-generator) 来生成代码。

## 运行
### 服务器端
1 创建表  
在 MySQL 中执行下面的 `sql` 来创建数据库的表和导入初始化数据。

```
DROP SCHEMA IF EXISTS `easy-cms-template`;
CREATE SCHEMA `easy-cms-template`;
use `easy-cms-template`;

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hello_world
-- ----------------------------
DROP TABLE IF EXISTS `hello_world`;
CREATE TABLE `hello_world` (
  `id` varchar(36) NOT NULL,
  `name` varchar(10) NOT NULL COMMENT '名称',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  `delFlg` int(1) DEFAULT NULL COMMENT '删除标志位',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('9dc7c9a0-83f4-3172-d7b5-6f2523e55b40', NULL, NULL, 0, 'uktatgt')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('28810349-e26d-cc6e-fe52-e1435b60c9c1', NULL, NULL, 0, 'tumeyxzp')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('621d2ace-977c-bb82-23df-6742ed455b2f', NULL, NULL, 0, 'ietnkd')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('c92ab0e1-9d14-cced-2f93-9924364530f9', NULL, NULL, 0, 'cczsumy')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('322d4809-7876-7b96-2141-44d2928f20cc', NULL, NULL, 0, 'nx')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('5ac29afd-ec88-dfea-b5fa-5212a6543d08', NULL, NULL, 0, 'hwxcco')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('10ee7b04-abda-7668-7fc1-24dee3adb794', NULL, NULL, 0, 'tnx')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('17e8d2ea-2cd4-655a-094e-472d27a81239', NULL, NULL, 0, 'dmnyamg')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('af701240-7b9f-0b3b-6447-6f6864d502f8', NULL, NULL, 0, 'hqjxln')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('babb494d-a1a2-509c-9682-5976d3361f75', NULL, NULL, 0, 'bcuxv')
INSERT INTO `easy-cms-template`.hello_world (id, createTime, updateTime, delFlg, name) VALUES ('d626be0f-83e4-9544-2cd8-da518b81f3e4', NULL, NULL, 0, 'slfvr')
```

2 修改配置  

* 修改 `config.
default.js` 下框架相关的配置。
  * `keys` cookie 会用这个来签名，加密
  * `mysql` 的配置。
  * `jwtTokenSecret` jwt 的密钥

3 安装依赖  
```bash
npm i
```

4 运行  
```bash
npm run debug
```

服务器端地址为 `http://localhost:7001/`。



### 管理后台

```
cd admin
npm install
npm run dev
```
