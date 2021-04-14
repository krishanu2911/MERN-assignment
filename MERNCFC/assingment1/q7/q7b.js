// 1
// 1 2
// 1 2 3
// 1 2 3 4 pattern to print.
let n = 10;
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(j +" ");
         }
    process.stdout.write("\n");
   }