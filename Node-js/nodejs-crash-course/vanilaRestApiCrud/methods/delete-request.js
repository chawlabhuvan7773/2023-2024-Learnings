const writeToFile = require("../utils/write-to-file");

module.exports = (req, res) => {
  console.log("coming");
  let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89AB][0-9a-f]{3}-[0-9a-f]{12}$/i
  );

  console.log(baseURL, "baseURL");
  if (!regexV4.test(id)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation Failed",
        message: "UUID is not valid",
      })
    );
  } else if (baseURL === "/api/movies/" && regexV4.test(id)) {
    const index = req.movies.findIndex((movie) => id === movie.id);
    console.log(index, "index");
    if (index === -1) {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not Found", message: "Movies not found" })
      );
      res.end();
    } else {
      req.movies.splice(index, 1);
      console.log(req.movies, "req.movies");
      writeToFile(req.movies, "movies.json");
      res.writeHead(204, { "Content-type": "application/json" });
      res.end(JSON.stringify(req.movies));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation Failed",
        message: "Request body is not valid",
      })
    );
  }
};
