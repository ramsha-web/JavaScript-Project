//Palindrome Checker
function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");

  // Display the result
  console.log(`Cleaned string: "${cleanedStr}"`);
  if (isPalindrome) {
    console.log(`"${str}" is a palindrome.`);
  } else {
    console.log(`"${str}" is not a palindrome.`);
  }
}
palindrome("2A3*3a2");       
palindrome("2A3 3a2");       
palindrome("2_A3*3#A2");   
palindrome("hello!");   

//Roman Numeral Calculator
function convertToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  // Loop through the romanNumerals array
  for (let [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;  // Add the Roman symbol to the result
      num -= value;     // Subtract the value from num
    }
  }

  return result;
}
console.log(convertToRoman(36));
console.log(convertToRoman(45));
console.log(convertToRoman(649));
console.log(convertToRoman(400));

//Caesars Chiper
function rot13(str) {
  return str.split('').map(char => {
    if (/[A-Ma-m]/.test(char)) {
      // Shift the letter by 13 positions
      return String.fromCharCode(char.charCodeAt(0) + 13);
    } else if (/[N-Zn-z]/.test(char)) {
      // Shift the letter by 13 positions
      return String.fromCharCode(char.charCodeAt(0) - 13);
    } else {
      // Return non-alphabetic characters unchanged
      return char;
    }
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("ZL ANZR VF ENZFUN FNVS"));    

//Telephone number Validator
function telephoneCheck(str) {
  // Regular expression for matching valid US phone numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the string against the regex pattern
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); 
console.log(telephoneCheck("(555) 555-5555")); 
console.log(telephoneCheck("555 555 5555")); 
console.log(telephoneCheck("5555555555")); 
console.log(telephoneCheck("+1 555-555-5555")); 
console.log(telephoneCheck("+1 (555) 555-5555")); 
console.log(telephoneCheck("+1 555 555 5555"));
console.log(telephoneCheck("800-692-7753")); 
console.log(telephoneCheck("8oo-six427676;laskdjf")); 
console.log(telephoneCheck("5555555")); 
console.log(telephoneCheck("1234 567 890")); 

//Pakistan Telephone number validator 
function isPakistaniPhoneNumber(str){
  const regex = /^(?:\+92|92)?\s?03\d{2}[\s\-]?\d{7}$/;
  return regex.test(str);

}
console.log(isPakistaniPhoneNumber("03001234567"));   
console.log(isPakistaniPhoneNumber("+92 300 1234567")); 
console.log(isPakistaniPhoneNumber("923001234567"));    
console.log(isPakistaniPhoneNumber("300-1234567"));     
console.log(isPakistaniPhoneNumber("3001234567"));      
console.log(isPakistaniPhoneNumber("+92300 123 4567")); 
console.log(isPakistaniPhoneNumber("0312 1234567"));    
console.log(isPakistaniPhoneNumber("092-300-1234567"));
console.log(isPakistaniPhoneNumber("3001234"));   


//Cash Register
function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  const currencyUnit = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];
  
  let change = [];
  let totalCid = 0;
  // Calculate total cash in drawer
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  // If there's not enough money in the drawer, return "INSUFFICIENT_FUNDS"
  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // If the total cash in the drawer is equal to the change due, return "CLOSED"
  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Otherwise, try to make change
  for (let i = 0; i < currencyUnit.length; i++) {
    let coinName = currencyUnit[i][0];
    let coinValue = currencyUnit[i][1];
    let coinAmount = cid[i][1];
    let coinToReturn = 0;

    // If we can give change with this denomination
    if (changeDue >= coinValue) {
      while (changeDue >= coinValue && coinToReturn < coinAmount) {
        changeDue -= coinValue;
        coinToReturn += coinValue;
        changeDue = Math.round(changeDue * 100) / 100; // Avoid floating point precision errors
      }

      if (coinToReturn > 0) {
        change.push([coinName, coinToReturn]);
      }
    }
  }

  // If the remaining change due is greater than 0, it means we couldn't make exact change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Calculate the remaining cash in the drawer after giving change
  let remainingCid = [];
  for (let i = 0; i < cid.length; i++) {
    remainingCid.push([cid[i][0], Math.round(cid[i][1] * 100) / 100]);
  }

  // If the remaining cash in the drawer is equal to the original cash, return "CLOSED"
  let remainingTotal = 0;
  for (let i = 0; i < remainingCid.length; i++) {
    remainingTotal += remainingCid[i][1];
  }
  
  if (remainingTotal === totalCid) {
    return { status: "CLOSED", change: remainingCid };
  }

  return { status: "OPEN", change: change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

