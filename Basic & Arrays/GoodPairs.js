let fs = require("fs");
let data = fs.readFileSync("D:/10x/10x/Input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


/*Good Pairs
We have an array of n integers, say arr. A pair of indices i, j (i < j) , 
is called good if arr[i] is same as arr[j]. 
We want to count the number of good pairs in the given array.

Input
Single line containing a list of integers separated by spaces

Output
Single integer representing total number of good pairs

Example
Input:

71 32 -53 71 71 -53

Output:

4

Explanation:
(0, 3) is a good pair, because arr[0] is 71 and arr[3] is also 71. 
Similarly (0, 4), (2, 5) and (3, 4) are also good pairs. So, total there are 4 good pairs in the given array.
*/
let arr = readLine().split(" "); 
let count = 0;
for (let i=0 ; i<arr.length ; i++) {
    for (let j=1 ; j<arr.length ; j++) {
        if(arr[i] == arr[j] && i<j) {
            count +=1;
        }
    }
}
console.log(count);