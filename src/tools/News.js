const request = require('request')
const News = (callback) => {
    const NewsApi = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f0359b89d8864fc9be3cec27698daad4'


    request({ url: NewsApi, json: true }, (error, response) => {

        console.log(response.body.articles)
            // console.log(response.body.articles[0].title)
            // console.log(response.body.articles[0].urlToImage)

        if (error) {
            callback("error has occurred", undefined)
        } else if (response.body.error) {
            callback(response.body.error.type, undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else {

            callback(undefined, {
                articles: response.body.articles
                    // title: response.body.articles.title,
                    // urltoimage: response.body.articles.urlToImage
            })


        }


    })
}
module.exports = News