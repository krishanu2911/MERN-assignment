// program to find GCD of two number.
//brute force method.
// let num1 = 10;
// let num2 = 15;
// let lowest = 0;

// if (num1<num2){
//      lowest = num1;
// }else{
//      lowest = num2;
// }
// for(j=1;j<=lowest;j++){
//     if (num1%j==0 && num2%j==0){
//         let gcd = j;
//         console.log(gcd);
//     }
// }

// using euclid's algorithm
function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b );
}
console.log(gcd(10,15));