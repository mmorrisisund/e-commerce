const { test } = require('./auth.controllers')

module.exports = Router => {
  const router = new Router()

  router.get('/', test)

  return { prefix: '/auth', router }
}
