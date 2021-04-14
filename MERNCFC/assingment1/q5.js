//program to count the number of digit.
let number = 1232435;
let count = 0;
while(number>0){
    number = Math.floor(number/10);
    count++;
}
console.log(count);