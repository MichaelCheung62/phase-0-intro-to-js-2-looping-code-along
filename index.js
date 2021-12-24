// Code your solutions in this file
const writeCards = (name) => {
    let result = []
    for(let i = 0 ; i < name.length; i++){ 
        console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
        result.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)    
    }
    return result
}

const countDown = () => {
    let countup = 0
    while (countup < 11){
        console.log(countup++)
   } 
}