function hasTargetSum(array, target) {
  // Write your algorithm here

  let availableNum = new Set();
  for(let num of array) {
    let complement = target - num;
    if (availableNum.has(complement)) {
      return true
    }
    availableNum.add(num)
  }
  return false
}

/* 
  Big O time complexity: 
  The time complexity of this function is O(n), where n is the number of elements in the input array. 
  This is because the function iterates through each element in the array once.
*/

/* 
  Pseudocode here:
  Initialize an empty set seenNumbers to keep track of numbers seen so far.
  For each number in the input array:
    =>Calculate complement which is equal to target - number.
    =>If complement is in the seenNumbers set, return true.
    =>Otherwise, add the number to the seenNumbers set.
  If the loop completes without finding a pair that adds up to the target, 
return false.
*/

/*
  Add written explanation of your solution here:

  I iterate through each number in the array. 
  For each number, I calculate what the complement would need to be in order for that number to add up to the target. 
  We check if I have already seen the complement earlier in the array by checking our set. 
  If I find the complement in the set, that means there is a pair that adds up to the target, so we can return true. 
  If we reach the end of the array without finding such a pair, 
  we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
