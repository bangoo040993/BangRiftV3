require('dotenv').config();
const PORT = process.env.PORT || 9000;
const app = require('./app-server')

const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once('open', () => {
    console.log('MongoDB: This maybe our last chance - Tidus')
})

app.listen(PORT, () => {
	console.log('I love you  ' + PORT + ' beyond')
})
