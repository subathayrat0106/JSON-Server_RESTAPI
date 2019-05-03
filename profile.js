var faker = require('faker')

module.exports = function generateProfile(){
    var profile = []
    var userName = faker.internet.userName()
    var password = faker.internet.userName()
    var avatar = faker.internet.avatar()
    var userAgent = faker.internet.userAgent()
   profile.push({
       "user_name": userName,
       "password": password,
       "avatar": avatar,
       "user_agent": userAgent,
   })
    
    return { "profile": profile }   
}