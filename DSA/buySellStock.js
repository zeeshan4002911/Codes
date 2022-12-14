/*

Buy Sell Stock
Description

You are an investor and you are trying to analyze the maximum profit that you can get given stock price information. You are given a list of n numbers each specifying the stock price for a single day. You need to write a program to find the maximum profit that can be made by buying a stock on one day and selling it on a later day. Let's assume that you are allowed to only buy one unit of stock and please keep in mind that you cannot sell the stock before you buy.
Input format

First line contains a positive integer n, denoting the number of days. Following n lines contain n integers each specifying the stock price for that day.
Output format

1 line containing the maximum profit that can be made from the above information.
Sample input

6
7
1
5
3
6
4

Sample output

5

Explanation

First line is 6, i.e. 6 days of data. Second line is 7 which is the stock price on the 1st day. Third line is 1 which is the stock price on 2nd day. Fourth line is 5 which is the stock price on 3rd day so and so forth.
As you can see, if we buy the stock on 2nd day (stock price is 1) and sell it on 5th day (stock price is 6), it gives us the maximum profit. So the output is 6 - 1 = 5
*/

let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//More Optimmised Time Commplexity

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()));
}
let result = 0;
let i = 0, j = 1;
while (i < n) {
    if (arr[i] < arr[j]) {
        let profit = arr[j] - arr[i];
        if (profit > result) result = profit;
    }
    else i = j;
    j++;
}
console.log(result)

// BruteForce Approach
/*
let noOfDays = parseInt(readLine());
let price = [];
for (let i = 0; i < noOfDays; i++) {
    let input = parseInt(readLine());
    price[i] = input;
}
let max_profit = 0;
let prev_max_profit = 0;
for (let i = 0; i < noOfDays; i++) {
    for (let j = i + 1; j < noOfDays; j++) {
        let profit = price[j] - price[i];
        if (profit >= 0 && max_profit >= prev_max_profit) {
            max_profit = profit;
        }
        if (max_profit > prev_max_profit) prev_max_profit = max_profit;
    }
}
console.log(prev_max_profit);
*/