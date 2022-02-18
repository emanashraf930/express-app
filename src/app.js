const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');
// 1) D:\nti\node\express-app\src 2)../
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)


const News = require('./tools/News')
News
// console.log(News.articles)
app.get('/', (req, res) => {

        res.render('index', {
            articles: req.query.articles
                // auther: 'Yassin',
                // urlToimage: 'hello'


        })
    })
    // console.log(articles)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})