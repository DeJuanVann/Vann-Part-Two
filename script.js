let score = []
let name = prompt("what is your name")
let game = prompt("Would you like to play 3 or 6 holes of mini golf?")

for(let i = 0; i < game; i++) {
    const question = prompt(`How many putts did you get for hole ${i + 1}?`)
    score.push(parseInt(question))
  }
  
const total = score.reduce((a, b) => a + b)


let totalPar;
if(game == 3){
    totalPar = total - 9
} else {
    totalPar = total - 18
}
console.log(total)
console.log(totalPar)
if (totalPar > 18){
    console.log(`Nice try, ${name}... Your total par was: +(${totalPar}).`)
} if (totalPar < 18 ){
    console.log(`Great job, ${name}! Your total par was: -(${totalPar})`)
} else {
        console.log(`Good game, ${name}. Your total par was: 0`)
}
    
if (totalPar > 9) {
    console.log(`Nice try, ${name}... Your total par was: +(${totalPar}).`)
} if (totalPar < 9){
    console.log(`Great job, ${name}! Your total par was: -(${totalPar})`)
} else {
    console.log(`Good game, ${name}. Your total par was: 0."`)
}
        
    


