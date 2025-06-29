var a = 123
var b = 13
var n = 4
var str = ""
var final = base(a,n) + base(b,n)
if(final == 0)
{
    str = "0"
}
while(final > 0)
{
    var mod = final % n
    str = mod + str
    final = parseInt(final / n)
}
console.log(str)

function base(num,n)
{
    var result = 0
    var count = 0
    while(num > 0)
    {
        result += (num % 10) * (n**count)
        count++
        num = parseInt(num/10)
    }
    return result
}
