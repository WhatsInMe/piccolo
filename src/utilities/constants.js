const __DB_HOST__ = process.env.POSTGRES_HOST;
const __DB_NAME__ = process.env.POSTGRES_DB;
const __DB_PASS__ = process.env.POSTGRES_PASS;
const __DB_PORT__ = process.env.POSTGRES_PORT;
const __DB_USER__ = process.env.POSTGRES_USER;

module.exports = {
  __DB_HOST__: __DB_HOST__,
  __DB_NAME__: __DB_NAME__,
  __DB_PASS__: __DB_PASS__,
  __DB_PORT__: __DB_PORT__,
  __DB_USER__: __DB_USER__,
};
