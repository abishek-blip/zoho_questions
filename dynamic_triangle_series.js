var n = 6
var iter = n - 1
for(var i = 1; i <= n; i++)
{
    var count = n
    var line = ""
    line = line + i
    var prev = i
    for(var j = 1; j <= iter; j++)
    {
        var sum = prev + count
        line = line + " " + sum   
        prev = sum
        count--
    }
    console.log(line);
    iter--
}