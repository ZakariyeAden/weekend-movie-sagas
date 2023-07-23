const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "movies_genres"
  JOIN "movies"
  ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres"
  ON "genres"."id" = "movies_genres"."genre_id"`;
  pool
    .query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log("ERROR: Getting the genres", err);
      res.sendStatus(500);
    });
});

module.exports = router;
