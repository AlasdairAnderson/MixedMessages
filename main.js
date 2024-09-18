// Mixed Massagges

// Store Hikues
let hikues = {
    line1: ["An ancient pool,","The list of a candle", "This world of dew", "I write, erase, rewrite"],
    line2: ["A frog jumps in", "Is transferred to antoehr candel", "Is a world of dew,", "Erase again, and then"],
    line3: ["The sound of water.", "Spring twilight", "and yet, and yet.", "A poppy bloomes"],
    makeHaiku(){
        const firstLine = this.line1[Math.floor(Math.random() * this.line1.length)];
        const secondLine = this.line2[Math.floor(Math.random() * this.line2.length)];
        const thridLine = this.line3[Math.floor(Math.random() * this.line3.length)];
        //randomise to select each different line

        //return concatination of each line
        return `${firstLine} ${secondLine} ${thridLine}`
    }
}

// Script to construct Hikeus out of the stored lines

    //Must be randomized

console.log(hikues.makeHaiku());