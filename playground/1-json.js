const fs = require("fs");
// const book = {
//   title: "1984",
//   author: "george orwell",
// };

// const bookJSON = JSON.stringify(book);
// // fs.writeFileSync("1-json.json", bookJSON);
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

const dataB = fs.readFileSync("1-json.json");
const dataJ = dataB.toString();
const data = JSON.parse(dataJ);

data.name = "Bogdan";
data.age = "12";

const dataJS = JSON.stringify(data);
console.log(dataJS);
fs.writeFileSync("1-json.json", dataJS);
