import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initUserModel from './users.mjs';
import initBookModel from './books.mjs';
import initOrderModel from './orders.mjs';
import initBookOrderModel from './bookOrder.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Book = initBookModel(sequelize, Sequelize.DataTypes);
db.Order = initOrderModel(sequelize, Sequelize.DataTypes);
db.BookOrder = initBookOrderModel(sequelize, Sequelize.DataTypes);

// one to many table

// one user can have many orders
db.User.belongsTo(db.Order);
db.Order.hasMany(db.User);

// many to many
db.Book.belongsToMany(db.Order, { through: db.BookOrder });
db.Order.belongsToMany(db.Book, { through: db.BookOrder });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
