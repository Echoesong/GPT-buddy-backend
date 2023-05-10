///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
require('./config/db.connection.js');
const express = require("express");
const queriesRouter = require('./routes/queries-router.js')
const cors = require("cors")
const morgan = require("morgan")

const { PORT, AUTH0_SECRET, AUTH0_CLIENTID, AUTH0_BASEURL} = process.env;

const app = express();

///////////////////////////////
// MiddleWare
////////////////////////////////

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: 'http://localhost:4000',
  clientID: AUTH0_CLIENTID,
  issuerBaseURL: AUTH0_BASEURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL

// req.isAuthenticated is provided from the auth router


app.use(auth(config));
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.use('/queries', queriesRouter)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

