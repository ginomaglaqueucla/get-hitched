const express = require('express');
const sequelize = require('./config/connection.js');
const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./controllers');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//indicating you want to use routes
app.use(routes);

//this turns on the connection to the server and db
sequelize.sync({ force: true }).then(() => { //at the bottom of the file, we use the sequelize.sync() method to establish the connection to the database
    app.listen(PORT, () => console.log(`Now listening at ${PORT}!`));
});
