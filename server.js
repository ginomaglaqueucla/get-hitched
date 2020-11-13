const express = require('express');
const sequelize = require('./config/connection.js');
const app = express();
const PORT = process.env.PORT || 3001;

//this turns on the connection to the server and db
sequelize.sync({ force: false }).then(() => { //at the bottom of the file, we use the sequelize.sync() method to establish the connection to the database
    app.listen(PORT, () => console.log(`Now listening at ${PORT}!`));
});