var n = 1000
var mod = 0
var total = 0

for(i = 1; i <= n; i ++)
{
    var temp = i
    var num = i
    var result = 0
    while(num > 0)
    {
        mod = num % 10
        total = mod * mod * mod
        result = result + total
        num = parseInt(num / 10)
    }

    if(temp == result)
    {
        console.log("Armstrong number:", result);
    }
}