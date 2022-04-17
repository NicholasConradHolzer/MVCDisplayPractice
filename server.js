const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);



const sess = {
  secret: process.env.SECRET,
  cookie: {maxAge: 36000},
  // maxAge: 36000
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
app.use(session(sess));

const hbs = exphbs.create({helpers});



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('RS,R!'));
});