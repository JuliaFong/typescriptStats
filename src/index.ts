import fs from 'fs';
//fs stands for file system

const matches = fs.readFileSync('football.csv', {
    encoding: "utf-8"
});

console.log(matches)
