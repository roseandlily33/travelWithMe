const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () =>`Listening on port ${PORT}`);
})