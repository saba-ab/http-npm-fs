import moment from "moment";
import fs from "fs";
import * as url from "url";
import http from "http";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import { usersJson } from "./helper.js";
import * as path from "path";

moment().format();

const getDaysDifference = (date1, date2) => {
  return moment(date1).diff(moment(date2), "days");
};
const daysRes = getDaysDifference([2007, 0, 29], [2007, 0, 21]);
console.log(daysRes);

const isInFileSystem = (dir) => {
  if (fs.existsSync(dir)) {
    return `this path : ${dir} exists in your filesystem 👍`;
  } else {
    return `this path : ${dir} do not exists in your filesystem!!! ❌`;
  }
};
const desktopRes = isInFileSystem("/Users/saba/Desktop/d");
const dirnameRes = isInFileSystem(__dirname);
console.log(desktopRes);
console.log(dirnameRes);

const PORT = 3000;
const homePath = path.join(__dirname, "homepage.html");
const homepage = fs.readFileSync(homePath, "utf-8");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(homepage);
    res.end();
  } else if (pathname === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.write(usersJson);
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`server is running on port ${PORT}...`);
});
