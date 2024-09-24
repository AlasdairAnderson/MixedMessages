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
        hikues = splitCommas(splitRow(loadedCSV));
  
        console.log(hikues.makeHaiku());
    }
})

function splitRow(CSVfile){

    return CSVfile[0].split('\n');

}

function splitCommas(rows){

    const hikues = {
        line1: [],
        line2: [],
        line3: [],
        makeHaiku(){
            //randomise to select each different line
            const firstLine = this.line1[Math.floor(Math.random() * this.line1.length)];
            const secondLine = this.line2[Math.floor(Math.random() * this.line2.length)];
            const thridLine = this.line3[Math.floor(Math.random() * this.line3.length)];
    
            //return concatination of each line
            return `${firstLine} ${secondLine} ${thridLine}`
        }
    }
    // Split rows into seprate lines
    for (i = 1; i < rows.length; i++){
        const lines = rows[i].split(',');
        if(lines.length > 3){
            console.log("There are more than 3 lines this is not a hikue");
            return 0;
        }
        // Sparate hikues into specific lines
        hikues.line1.push(lines[0]);
        hikues.line2.push(lines[1]);
        hikues.line3.push(lines[2]);
    }

    return hikues
}

