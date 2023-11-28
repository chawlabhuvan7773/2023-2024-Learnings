const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`
    <html> 
        <head><title>Enter Message </title></head>
        <body>
        <form method="post" action="/message">
            <input type="text"  name="message"/>
            <button type="submit">Enter The Message </button>
        </form>
        </body>
    </html>
    `);
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk, "chunk");
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody, "parsedBody");
      const message = parsedBody.split("=")[1];
      //   fs.writeFileSync("message.txt", message); // this fs.wrtieFileSync is synchronous
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
        // err will be null if there is no error if there is error while copying this file then it will through the error
      }); // this fs.wrtieFile is asynchronous
    });
  }
  res.setHeader("content-type", "text/html");
  res.write(
    `
    <html>
    <head><title>My first page</title></head>
    <body><p>hello dear </p> </body>
    </html> 
    `
  );
  res.end();
};

module.exports = requestHandler;
