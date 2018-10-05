//Palindrome App

function palindrome(word) {
  var words = [...word].reverse().join('').toLowerCase();

  if(words === word) {
    return true;
  } else  {
    return false;
  }
}

let result = palindrome('mom')
console.log(result);

console.log(palindrome('amanaplanacanalpanama'))

console.log(palindrome('snake'))


//Removing Duplicates from Array
let cities = ['Chicago', 'Atlanta', 'Boston', 'New York', 'Houston', 'Dallas', 'Memphis', 'Dallas', 'New York']

console.log(cities);

let removeDup = cities.filter(function(item, index) {
  if (cities.indexOf(item) == index)
  return item;
});

console.log(removeDup);


//return True or False

let food = ['rice', 'beans', 'cookies', 'cheese', 'tomatoe', 'crackers']
let input = 'hamburger'

if(input === food) {
  console.log(true);
  } else {
  console.log(false);
  }

//finding the largest and smallest number in an array

var numbers = [34, 78, 99, 10, -1, 101, 17, 89, 233, 333, -999, 15]

console.log("The largest number is " + Math.max(...numbers));

console.log("The smallest number is " + Math.min(...numbers));

//fizzBuzz

function fizzBuzz(number) {

  if(number % 6 == 0 && number % 27 == 0) {
      return "Fizz Buzz"
  } else if(number % 6 == 0) {
    return "Fizz"
  } else if (number % 27 == 0) {
    return "Buzz"
 }
}

console.log(fizzBuzz(12))
console.log(fizzBuzz(135))
console.log(fizzBuzz(162))
