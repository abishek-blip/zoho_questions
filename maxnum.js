var num = [10, 2, 44, 63]
var max = num[0]
for( i = 1; i < 4; i ++)
{
    if(max > num[i])
    {
        max=max
    }
    else
    {
        max=num[i]
    }
}
console.log(max);