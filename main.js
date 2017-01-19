function pigLatinize(phrase) {
  const words = phrase.split(' ');
  const pigLatinPhrase = words.map(word => {
    const wordArry = word.split('');
    const punctuation = [];
    if (!wordArry[0].match(/[AEIOU]/i)) {
      (function consanantNext(wordArry) {
        let firstLetter = wordArry.shift();
        if (firstLetter.match(/[A-Z]/)) {
          const newFirstLetter = wordArry.shift().toUpperCase();
          wordArry.unshift(newFirstLetter);
          firstLetter = firstLetter.toLowerCase();
        }
        for (let i = wordArry.length - 1; i >= 0; i--) {
          if (wordArry[i].match(/[.,/#!$%^&*;:{}=\-_`~()]/)) {
            punctuation.push(wordArry.pop());
            continue;
          }
          break;
        }
        wordArry.push(firstLetter);
        if (!wordArry[0].match(/[AEIOU]/i) || (firstLetter.match(/q/i) && wordArry[0].match(/u/i))) {
          consanantNext(wordArry);
        }
      })(wordArry);
    }
    wordArry.push('ay');
    return wordArry.concat(punctuation.reverse()).join('');
  });
  return pigLatinPhrase.join(' ');
}

module.exports = pigLatinize;
