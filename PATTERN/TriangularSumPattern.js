var n = 6
var total;
for(var i = 1; i <= n; i++)
{
    var line = ""
    line += i + " "
    total = i
    count = n
    for(var j = i; j < n; j++)
    {
        total += count
        line += total + " "
        count--
    }
    console.log(line)
}