// SECTION C
//1. A function to reverse a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('Hello'));

  //Implement a function to find the sum of all even numbers in an array.
  function sumEvenNumbers(arr) {
    let sum = 0;
    arr.forEach((num) => {
      if (num % 2 === 0) {
        sum += num;
      }
    });
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = sumEvenNumbers(numbers);
  console.log(sum); // output will be 12
  

//Create a function that takes two numbers. If the numbers are the same, return their product. If they are different, return their sum.
function pdtAndSum(num1, num2) {
    if (num1 === num2) {
      return num1 * num2;
    } else {
      return num1 + num2;
    }
  }
  console.log(pdtAndSum(5,5)) 
  console.log (pdtAndSum(6,3))

//Write a function that checks if a given word is a palindrome.
function isPalindrome(word) {
    // Convert the word to lowercase for case-insensitive comparison
    const cleanedWord = word.toLowerCase();

    // Reverse the cleaned word and compare it to the original cleaned word
    const reversedWord = cleanedWord.split('').reverse().join('');

    // If the original word is the same as the reversed word, it's a palindrome
    return cleanedWord === reversedWord;
    
}
//forexample
console.log(isPalindrome("Hello"));//returns a false
console.log(isPalindrome('MUM'));// returns a true
