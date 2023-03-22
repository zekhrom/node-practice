const fs = require('fs')
const os = require('os')
const csvtojson = require('csvtojson');

const filePath = 'src/assets/nodejs-hw1-ex1.csv';

const {
    O_TRUNC,
} = fs.constants;

fs.exists(filePath, (e) => {
    csvtojson().fromFile(filePath)
        .then((jsonData) => {
            writeFile(jsonData)
        })
})

function writeFile(jsonData) {
    fs.open('src/assets/task1.txt', 'w', O_TRUNC, function (e, id) {
        jsonData.forEach((json) => {
            fs.writeFile(id, JSON.stringify(json) + os.EOL, 'utf8', (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        fs.close(id, console.log('the file was updated!'))
    });
}