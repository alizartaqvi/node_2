import http from "http";

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("<h1>Welcome to  Home Page</h1>");
    } else if (req.url === "/about") {
      res.end("<h1>Welcome to  About Page</h1>");
    } else {
      res.end(`
    <h1>Page Not Found</h1>
    `);
    }
  })
  .listen(4000);
