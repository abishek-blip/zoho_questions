//Using 'while' loop
var num = 5
var start = 0
var next = 1
var temp;
while(num > 0)
{
    console.log(start)
    temp = next
    next = start + next
    start = temp
    num--
}


//Using 'for' loop
var num = 5
var start = 0
var next = 1
var temp;
for(var i = 0; i < num; i++)
{
    console.log(start)
    temp = next
    next = start + next
    start = temp
}


//Using recursion method-1
var num = 5
fib(num,0,1)
function fib(num,start,next)
{
    var temp;
    if(num > 0)
    {
        console.log(start)
        temp = next
        next = start + next
        start = temp
    }
    else
    {
        return 0
    }
    return fib(num-1,start,next)
}


//Using recursion method-2
var num = 5
for (var i = 0; i < num; i++) 
{
    console.log(fibonacci(i));
}
function fibonacci(n) 
{
    if (n === 0) 
    {
        return 0;
    }
    if (n === 1) 
    { 
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
