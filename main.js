// Mixed Massagges

// Read CSV File
const fs = require('fs');

const loadedCSV = []
let line1;
let line2;
let line3;

fs.readFile("./haiku.csv", "utf-8", (err, data) => {
    if(err){
        console.log(err.message);
    } else {
        loadedCSV.push(data);
        rows = splitRow(loadedCSV);

        console.log(rows);

    }
})

function splitRow(CSVfile){
    
    return CSVfile[0].split('\n');
    
}


let hikues = {
    line1: ["An ancient pool,","The list of a candle,", "This world of dew,", "I write, erase, rewrite"],
    line2: ["a frog jumps in", "is transferred to antoehr candel", "is a world of dew,", "erase again, and then"],
    line3: ["the sound of water.", "spring twilight", "and yet, and yet.", "a poppy bloomes"],
    makeHaiku(){
        //randomise to select each different line
        const firstLine = this.line1[Math.floor(Math.random() * this.line1.length)];
        const secondLine = this.line2[Math.floor(Math.random() * this.line2.length)];
        const thridLine = this.line3[Math.floor(Math.random() * this.line3.length)];

        //return concatination of each line
        return `${firstLine} ${secondLine} ${thridLine}`
    }
}

//console.log(hikues.makeHaiku());
