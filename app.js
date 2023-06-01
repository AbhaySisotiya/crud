import express from 'express'
import connect from './db/connect.js ';
const app = express()
const port = 3000
const url = "mongodb://127.0.0.1:27017";
import web from './routes/web.js'

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use('/student', web);
connect(url)
app.listen(port, () => {
    console.log(`Ready... http://localhost:${port}`)
})