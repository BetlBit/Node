const http = require("http");
const fs = require("fs");
const port = 3000;

let text = fs.readFileSync("coffie.csv", "utf8");
let textArr = text.split(";");
let textArrDubl = [];

textArr.forEach((e) => {
    textArrDubl.push(e.split(","));

})
console.log(textArrDubl)

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./public/index.html", (err, data) => {
            res.write(!err ? data : "Файл был потерян", "utf8");
            res.end();
        });
    } else {
        let read = fs.readFileSync("coffie.csv");
        console.log(read);
    }
});
server.listen(port, err => !err && console.log("Server starting"))