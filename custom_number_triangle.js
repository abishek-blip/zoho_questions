var n = 5
for(var i = 1; i <= n; i++)
{
    var prev = i
    var line = ""
    line = line + i
    var count = n - 1
    for(var j = 1; j < i; j++)
    {
        var sum = prev + count
        line = line + " " + sum
        count --
        prev = sum
    }
    console.log(line);
}