const {
  __DB_HOST__,
  __DB_USER__,
  __DB_NAME__,
  __DB_PASS__,
  __DB_PORT__,

  __EXPRESS_PORT__,
} = require("./utilities/constants");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mes: "sup" });
});

app.listen(__EXPRESS_PORT__, ()=>{
    console.log(`running on port ${__EXPRESS_PORT__}`)
})
