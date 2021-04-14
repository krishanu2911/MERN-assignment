// program to print even number after odd number of jump
// 2 ->6->14....
let innum=2; //innum -> initial number
let jump=1;
while(innum<100)
{
    console.log(innum+" ");
    innum=innum+(4*jump);
    jump+=1;
}