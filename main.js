var str1 = "abc";
var str2 = "cde";

var arr1 = str1.split("").sort();
var arr2 = str2.split("").sort();

// Create a array with 26 values initialized with '0'
var count = new Array(26).fill(0);

// Get each character length for first string array
for (var i = 0; i < arr1.length; i++) {
    // Get ascii difference of every character
    count[arr1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
}

// Get each character length for second string array
for (var i = 0; i < arr2.length; i++) {
    // Get ascii difference of every character
    count[arr2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
}

// Final count goes in this variable
var ans = 0;
// Get summation of count array values
ans = count.reduce(getSum);

function getSum(total, num) {
    return total + Math.abs(num);
}

alert(count);
alert(ans);