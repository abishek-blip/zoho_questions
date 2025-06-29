var n = 10
var count = 0
for (var i = 2; i <=n; i ++)
{
    var flag = 0
    for ( j = 2; j < i; j ++)
    {
        if(i % j == 0)
        {
            flag = 1
        }
    }
    if (flag == 0)
    {
        count = count + 1
        console.log("Prime:", i);
    }
}
console.log(count);