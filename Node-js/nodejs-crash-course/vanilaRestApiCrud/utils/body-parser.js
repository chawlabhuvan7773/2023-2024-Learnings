module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (err) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Body-parser Failed",
          message: "Request body is not valid",
        })
      );
    }
  });
};
