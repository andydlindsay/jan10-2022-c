const numVowels = (str) => {
  // setup a variable to hold the number of vowels
  // console.log('str', str);
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // look at each character of the string
  for (const character of str) {
    // is the current character a vowel?
    
    if (vowels.includes(character)) {
      // if yes, we want to increment the number of vowels
      count = count + 1;
    }

  }

  // return the vowel number variable
  return count;
};

module.exports = numVowels;
