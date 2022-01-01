require("dotenv").config();

const moment = require("moment");

const knex = require("knex");

const knexfile = require("./knexfile");

const env = process.env.NODE_ENV || "development";
const configOptions = knexfile[env];
const query = knex(configOptions);

query.on("query", function (queryData) {
  console.log(
    `[${moment(Date.now()).format("h:mm:ss")}] :`,
    queryData.sql,
    queryData.sql === "BEGIN;" || queryData.sql === "COMMIT;"
      ? ""
      : queryData.bindings
  );
});

module.exports = query;
