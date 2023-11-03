/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */

var friendOne = ["Jin", "Yura", "Nav"];
var friendTwo = ["Sam", "Deluka", "Brian"];

var group = friendOne.concat(friendTwo);



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 *  
 */

var friends = [
    ["Jin", "Yura", "HK", "Jordyn"],
    ["Nav", "Sandy", "Samantha", "Leslie"]
]

console.log(`My friend ${friends[0][0]} is in Toronto and my friend ${friends[1][2]} is in Vancouver.`);


