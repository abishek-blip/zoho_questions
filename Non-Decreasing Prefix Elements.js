var array = [2,-3,-4,5,9,7,8]
for(var i = 0; i < array.length; i++)
{
    var temp = array[i]
    var found = true
    for(var j = 0; j < i; j++)
    {
        if(temp < array[j])
        {
            found = false
            break
        }
    }
    if(found)
    {
        console.log(array[i]);
    }
}