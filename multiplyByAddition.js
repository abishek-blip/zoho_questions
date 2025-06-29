var num1 = 3
var num2 = 4
if(num1 > num2)
{
    var temp = num1
    num1 = num2
    num2 = temp
}
console.log(sum(num1,num2))
function sum(num1,num2)
{
    var total = 0
    for(var i = 0; i < num1; i++)
    {
        total += num2
    }
    return total
}