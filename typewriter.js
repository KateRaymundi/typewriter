const slowsentence = (sentence) => {
let splitSentence = sentence.split("")
let waitTime = 1000 
for (const char of splitSentence) {
  setTimeout(() => {
  process.stdout.write(char)
  }, waitTime)
  waitTime += 500
}
}

slowsentence("hello there from lighthouse labs")