var faker = require('faker')
var postData = require('./post.js')
var profileData = require('./profile')

module.exports = function generatePersonalInfo(){
    var users = []
    for (var id = 1; id <= 20; id++) {
      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()
      var email = faker.internet.email()
      var jobType = faker.name.jobTitle()
      var zipCode = faker.address.zipCode();
      var streeAddress = faker.address.streetAddress();
      var city = faker.address.city(); 
      var state = faker.address.state();
      var posts = postData()
      users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "job_type":jobType,
        "address":{
            "street_Address":streeAddress,
            "city": city,
            "state":state,
            "zipCode":zipCode          
        },
        "profile":profileData(),
        "posts":posts
      })
  
    }
  
    return { "users": users }   
}