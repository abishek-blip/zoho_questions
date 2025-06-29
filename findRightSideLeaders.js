var arr = [16,17,4,3,5,2]
var res = []
for(var i = 0; i < arr.length; i++)
{
    var found = false
    for(var j = i + 1; j < arr.length; j++)
    {
        if(arr[i] < arr[j])
        {
            found = true
            break
        }
    }
    if(found == false)
    {
        res.push(arr[i])
    }
}
console.log(res);