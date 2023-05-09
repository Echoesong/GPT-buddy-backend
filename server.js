///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
require('./config/db.connection.js');
const express = require("express");
const queriesRouter = require('./routes/queries-router.js')
const cors = require("cors")
const morgan = require("morgan")

const { PORT } = process.env;
const app = express();

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("Hitting root");
});

app.use('/queries', queriesRouter)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

