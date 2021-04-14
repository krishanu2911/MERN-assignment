//program to reverse a number
let orinum = 435; //orinum-> original number.
let revnum = 0; //reversed number.
while(orinum>0){
   revnum = revnum*10 + orinum%10;
   orinum = Math.floor(orinum/10);

}
console.log(revnum);