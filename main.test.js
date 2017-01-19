const {expect} = require('chai');
const pigLatinize = require('./main');

describe('pigLatinize takes phrases and converts them to pig latin', () => {
  it('should move the consanant to the end of the word and add "ay"', () => {
    expect(pigLatinize('hello')).to.equal('ellohay');
  });

  it('should work on multiple words', () => {
    expect(pigLatinize('hello world')).to.equal('ellohay orldway');
  });

  it('should keep uppercasing', () => {
    expect(pigLatinize('Hello world')).to.equal('Ellohay orldway');
  });

  it('should leave puncation where it is', () => {
    expect(pigLatinize('Hello, world!!')).to.equal('Ellohay, orldway!!');
  });

  it('should skip words that start with a vowel', () => {
    expect(pigLatinize('eat apples')).to.equal('eatay applesay');
  });

  it('should move two consanants in a row to the end', () => {
    expect(pigLatinize('quick brown fox')).to.equal('ickquay ownbray oxfay');
  });

  it('should multiple consanants in a row to the end', () => {
    expect(pigLatinize('school')).to.equal('oolschay');
  });
});
