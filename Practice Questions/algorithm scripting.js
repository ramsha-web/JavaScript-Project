//to convert C to F
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32; 
  return fahrenheit;
}

console.log(convertCtoF(30)); 

// convert Fahrenheit to Celsius
function convertToC(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9
  return celsius
}

console.log(convertToC(86));

//Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("ramsha")); 

//factorize by usning recursive method 
function factorialize(num){
if (num===0 || num==1){
  return 1;
}
return num * factorialize(num-1);
}
console.log (factorialize(5));

//Find Largest number in array
function largestOfFour(arr) {
  return arr.map(subarray=>Math.max(...subarray));
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Find longest word in a string
function findLongestWordLength(str) {
  return str.split(' ').reduce((longest, word) => Math.max(longest, word.length), 0);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); 

//Confirm Ending
function confirmEnding(str, target) {
  return str.endsWith(target);
}

console.log(confirmEnding("Programming", "g")); 

//Repeat a string
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ""; 
  }
  return str.repeat(num); 
}

console.log(repeatStringNumTimes("abc", 3)); 

//Truncate a string using ternary operators
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString("my name is Ramsha Saif and I am a Front-end Developer", 8));

//Find First Even Number in a array 
function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

//Boolean check
function booWho(bool) {
  return typeof bool === 'boolean';
}

console.log(booWho(null));  
console.log(booWho(true));  
console.log(booWho(false)); 
console.log(booWho('string'));

//Capitalize first letter 
function titleCase(str) {
  return str
    .toLowerCase() 
    .split(' ') 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' '); 
}
console.log(titleCase("I'm a little tea pot")); 
//FrankenSplice array
function FrankenSplice(arr1, arr2,n){
  let result= arr2.slice();
  result.splice(n,0,...arr1);
  return result;
}
console.log (FrankenSplice([1,2,3],[4,6,8],1));

//Remove falsy values
function Bouncer(arr){
  return arr.filter(Boolean);
}
console.log(Bouncer([7,"Java","","Script",false, 0]));

//Find the index
function getIndexToIns(arr, num) {
  let sortedArr = arr.slice().sort((a, b) => a - b);

  return sortedArr.findIndex(x => x >= num);
}

console.log(getIndexToIns([40, 60], 50));

//Muatation 
function mutation(arr) {
  const [str1, str2] = arr.map(str => str.toLowerCase());
  return [...str2].every(char => str1.includes(char));
}
console.log(mutation(["hello", "ole"]));

//chunky array method 
function chunkArrayInGroups(arr, size) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  
  return result;
}

const chunks = chunkArrayInGroups(["a", "b", "c", "d","e"], 2);
chunks.forEach(chunk => console.log(chunk)); 

