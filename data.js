var faker = require('faker')
var userInfo = require('./personalInfo.js')
var companyInfo = require('./companyInfo.js')

function generateRandomData () {
  var company = companyInfo()
  var users = userInfo()

  return { "users": users ,"company":company}
}

module.exports = generateRandomData