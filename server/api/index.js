const fs = require('fs')
const path = require('path')
const { Router } = require('express')

const basename = path.basename(__filename)

const createApiRoutes = app => {
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename)
    .forEach(file => {
      const { prefix, router } = require(path.join(__dirname, file))(Router)
      app.use(`/api/v1${prefix}`, router)
    })
}

module.exports = createApiRoutes
