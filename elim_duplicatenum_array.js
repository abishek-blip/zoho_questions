var num = [2, 3, 1, 2, 3, 2]
var newarray = []
newarray.push(num[0])
for( k = 1; k < num.length; k ++ )
{
    var flag = 0
    for( l = 0; l < newarray.length; l ++ )
    {
        if( num[k] == newarray[l])
        {
            flag = 1
        }
    }
    if( flag == 0)
    {
        newarray.push(num[k])
    }
}
for( i = 0; i < newarray.length; i ++ )
{
    console.log(newarray[i]);
}
    