  function isPalindrome(s) {
    // Compare the string to its reverse
    return s === s.split('').reverse().join('');
}

// Examples:
console.log(isPalindrome("mom"));      // Should return true
console.log(isPalindrome("racecar"));  // Should return true
console.log(isPalindrome("hello"));    // Should return false
console.log(isPalindrome("noon"));     // Should return true


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
// *//Splits the string into an array of characters, reverses it, and then combines them back into a string.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
