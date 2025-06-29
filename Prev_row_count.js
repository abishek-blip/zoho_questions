var n = 5
var res = "1"
for(var i = 0; i < n; i++)
{
    if(i == 0)
    {
        console.log(res);
        continue
    }
    var left = 0
    var right = 0
    var temp = ""
    while(right <= res.length)
    {
        if(res[left] != res[right])
        {
            temp = temp + (right - left) + res[left]
            left = right
        }
        right++
    }
    res = temp
    console.log(res);
}