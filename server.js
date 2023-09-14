require('dotenv').config();
require('./config/database.js')
const PORT = process.env.PORT || 9000;
const app = require('./app-server')


app.listen(PORT, () => {
	console.log('I love you  ' + PORT + ' beyond')
})