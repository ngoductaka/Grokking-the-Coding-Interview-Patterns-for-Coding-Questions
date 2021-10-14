// '''
// Problem Statement 
// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both the baskets.
// Example 1:
// Input: Fruit.=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
// '''
const fn = (arr) => {
    const allResult = {};
    let result = 2;
    const cb = (index, array) => {

        let count = 2;
        if(index + 3 > array.length) return 1;
        const fruit = [array[index], array[index+1]];
        for(let i = index+2; i<array.length; i++) {
            if(fruit.includes(array[i])) {
                count++
            } else {
                break;
            }
        };
        allResult[index] = count;
        result = count > result ? count: result;

        cb(index+1, array);

    };
    cb(0, arr);

    console.log({allResult, result})
}

// const input1 = ['A', 'B', 'C', 'A', 'C'];
const input1 = ['A', 'B', 'C', 'C', 'B', 'B', 'C'];
const result = fn(input1);