// '''
// Problem Statement 
// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
// Example 1:
// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
// Example 2:
// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
// '''
const check = (arr, index, count) => {
    if(!arr[index]) return count;
    return check(arr, index+1, count+1)
}

const handleCount = (arrInput) => {
    
    const arrMap = [];
    const viewArr = (arr, index) => {
        if(index >= arr.length-1) return 1;
        if(arr[index] == 1) {
            let count = check(arr, index, 0);
            arrMap.push({count,start:index, end: index+count-1});
            if(index+count < arr.length-1)
            viewArr(arr, index+count)
        } else {
            viewArr(arr, index+1)
        }
    };
    viewArr(arrInput, 0);
    return arrMap;
    console.log(arrMap);
}
const fn = (arr, k) => {
    // st 1 => 
    const arrMap=handleCount(arr);
    // console.log('arrMap', arrMap)
    const connect = (arr, index) => {
        const {last: l1} = arr[index];
        const {last: l2} = arr[index+1];
        return l2-l1;
    }
    const tryConnect = (rest, arr) => {
        if(k<=0) return 1;
        for(let i = 0; i<length-1; i++) {
            connect()
        }
    };
    tryConnect()
}

fn([0,1,1,0,1,1,1])