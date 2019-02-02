/*
* 代码生成工具生成的代码。
* 注意：请勿改动，会有被覆盖的风险。
*/
module.exports = function (router, controller, jwt, publicPrefix) {
  router.get('/api/hello_world/list', jwt, controller.auto.helloWorld.list)
  router.get(`/${publicPrefix}/hello_world/list`, controller.auto.helloWorld.list)
  router.get('/api/hello_world/detail/:id', jwt, controller.auto.helloWorld.detail)
  router.get(`/${publicPrefix}/hello_world/detail/:id`, controller.auto.helloWorld.detail)
  router.post('/api/hello_world/add', jwt, controller.auto.helloWorld.add)
  router.post(`/${publicPrefix}/hello_world/add`, controller.auto.helloWorld.add)
  router.post('/api/hello_world/edit', jwt, controller.auto.helloWorld.edit)
  router.post(`/${publicPrefix}/hello_world/edit`, controller.auto.helloWorld.edit)
  router.post('/api/hello_world/del/:id', jwt, controller.auto.helloWorld.del)
  router.post(`/${publicPrefix}/hello_world/del/:id`, controller.auto.helloWorld.del)
}
