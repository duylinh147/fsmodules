const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

//const { unlink } = require('fs/promises');
const { appendFile } = require('fs/promises');

console.log(__dirname);
fs.readFile(path.join(__dirname, "ad.txt"), "utf8", (err, data) => {
    console.log(data);
});


fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('mynewfile1.txt', 'writeFile', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});


/*
(async function (path) {
    try {
        await fs.unlink(path);
        console.log(`successfully deleted ${path}`);
    } catch (error) {
        console.error('there was an error:', error.message);
    }
})('myfile3.txt');
*/
/*
fs.unlink("myfile3.txt", (err) => {
    if (err) {
        throw err
    } else
        console.log('delete success');
})
*/

(async function (path) {
    try {
        await appendFile(path, 'Hello content!');
        console.log(`successfully open file ${path}`);
    } catch (error) {
        console.error('there was an error:', error.message);
    }
})('myfile3.txt');

console.log(process.cwd());
