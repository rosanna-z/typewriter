const sentence = "hello there from lighthouse labs";

const printLetters = function() {
  let delay = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 100;
  }

  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
};

printLetters(sentence);