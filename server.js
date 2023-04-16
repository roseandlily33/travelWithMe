const express = requier('express');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

sequelize.sync().then(() => {
    app.listen(`Listening on port ${PORT}`);
})