const printWords = (sentence) => {
  let separateSetence = sentence.split(" ")
  let waitTime = 1000

  for (let word of separateSetence){ // o loop so funciona quando aplica o split 
    setTimeout(() => {
      console.log(word)
    }, waitTime) 
     waitTime += waitTime
    }
  }
printWords("4311o th3r3 w0r1d");
