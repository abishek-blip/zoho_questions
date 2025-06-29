var num = [10, 2, 44, 63]
var min = num[0]
for( i = 1; i < 4; i ++)
{
    if(min < num[i])
    {
        min=min
    }
    else
    {
        min=num[i]
    }
}
console.log(min);