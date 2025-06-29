var num1 = 102
var num2 = 3
var operation = "+"
var temp;
if(operation == "+")
{
    temp = num1 + num2
}
else if(operation == "-")
{
    temp = num1 - num2
}
else
{
    console.log("Invalid operation")
    return
}

function removeZeroSum(num)
{
    var mod;
    var result = ""
    while(num > 0)
    {
        mod = num % 10
        if(mod != 0)
        {
            result = mod + result
        }
        num = parseInt(num/10)
    }
    return parseInt(result)
}
var total = removeZeroSum(temp)
var n1 = removeZeroSum(num1)
var n2 = removeZeroSum(num2)
var final = 0
if(operation == "+")
{
    if(total == (n1+n2))
    {
        console.log("After removing zero,values are equal")
    }
    else
    {
        console.log("After removing zero,values are not equal")
    }
}
else if(operation == "-")
{
    if(total == (n1-n2))
    {
        console.log("After removing zero,values are equal")
    }
    else
    {
        console.log("After removing zero,values are not equal")
    }
}