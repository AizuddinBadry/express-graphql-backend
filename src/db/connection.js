require("dotenv").config();

const knex = require("knex");

const knexfile = require("./knexfile");

const env = process.env.NODE_ENV || "development";
const configOptions = knexfile[env];
const query = knex(configOptions);

if (process.env.APP_ENV === "dev" || process.env.APP_ENV === "staging") {
  query.on("query", function (queryData) {
    console.log(
      `[${moment(Date.now()).format("h:mm:ss")}] :`,
      queryData.sql,
      queryData.sql === "BEGIN;" || queryData.sql === "COMMIT;"
        ? ""
        : queryData.bindings
    );
  });
}

module.exports = query;
