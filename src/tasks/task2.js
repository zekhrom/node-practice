const fs = require('fs')
const os = require('os')
const csvtojson = require('csvtojson');

const filePath = 'src/assets/nodejs-hw1-ex1.csv';

const {
  O_TRUNC,
} = fs.constants;

if(fs.existsSync(filePath)) {
  csvtojson().fromFile(filePath)
    .then((jsonData) => {
      writeFile(jsonData)
    })
}

function writeFile(jsonData) {
  let stream = fs.createWriteStream('src/assets/task1.txt');
  jsonData.forEach((json) => {
    stream.write(JSON.stringify(json) + os.EOL, (err) => {
      if (err) {
        console.log(err);
      }
    })
  });
  stream.close();
}