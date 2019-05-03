var faker = require('faker')

module.exports = function generatePost(){
    var posts = []
    var num = faker.random.number(3,6)
    for (var id = 1; id <= num; id++) {
    var title = faker.lorem.words()
    var comment = faker.lorem.sentences()
    var createdDate = faker.date.recent()
      posts.push({
        "post_id":id,   
        "title":title,   
        "comment":comment,
        "created_date":createdDate
      })
  
    }
    num = faker.random.number(3,6)
    return { "post": posts }   
}