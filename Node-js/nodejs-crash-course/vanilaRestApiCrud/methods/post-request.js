const crypto = require("crypto");
const requestBodyParser = require("../utils/body-parser");
const requireWriteFile = require("../utils/write-to-file");
module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.movies.push(body);
      requireWriteFile(req.movies, "movies.json");
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end();
    } catch (err) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid",
        })
      );
    }
  }
};
