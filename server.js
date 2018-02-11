const express = require("express");
const unirest = require("unirest");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/:text", (req, res) => {
  
  unirest
    .get(`https://yoda.p.mashape.com/yoda?sentence=${req.params.text}`)
    .header(
      "X-Mashape-Key",
      "1oZrkxmAO9mshDYFWbEnFg1t3sgSp1PuNSBjsn5qEXgA3JrvEu"
    )
    .header("Accept", "text/plain")
    .end(result => {
      console.log(result.raw_body);
      res.json(result.raw_body);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
