import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

MongoClient.connect(
	process.env.RESTAURANT_REVIEWS_DB_URI,
	{
		maxPoolSize: 50,
		writeConern: {wtimeout: 2500},
		useNewURLParse: true,
		useUnifiedTopology: true,
	}
)
.catch(err => {
	console.log(err.stack);
	process.exit(1);
})
.then( async client => {
	app.listen(port, () => console.log(`listening on port: ${port}`))
})
