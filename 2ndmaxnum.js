var num = [10,20,10,30,40,60,20,50]
var max1 = num[0]
var max2 = 0
for( i = 1; i < num.length; i ++ )
{
    if( num[i] > max1 )
    {
        max2 = max1
        max1 = num[i]
    }
    else
    {
        if( num[i] > max2 )
        {
                max2 = num[i]
        }
    }
    
}
console.log(max2);