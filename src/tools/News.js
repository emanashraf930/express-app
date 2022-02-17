const request = require('request')

const News = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f0359b89d8864fc9be3cec27698daad4"


request({ url: News, json: true }, (error, response) => {

    console.log(response.body.articles[0].author)
    console.log(response.body.articles[0].title)
    console.log(response.body.articles[0].urlToImage)

})

module.exports = News