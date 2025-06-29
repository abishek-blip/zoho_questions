var num = 5
console.log(factorial(num));
 function factorial(n)
 {
    if(n == 1)
    {
        return 1
    }
    return n * factorial(n - 1)
 }

//2
var num = 5
var total = 1
for(var i = 1; i <= num; i++)
{
    total = total * i
}
console.log(total);