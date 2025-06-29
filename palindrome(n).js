var n = 1000
var mod = 0



for(i = 1; i <= n; i ++)
{
    var total = 0
    var temp = i
    var num = i
    

    while(num > 0)
    {
        mod = num % 10
        total = total * 10 + mod
        result = total
        num = parseInt(num / 10)
    }

    if(temp == result)
    {
        console.log("Palindrome number:", result);
    }
}