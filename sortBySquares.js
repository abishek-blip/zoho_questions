var arr = [-6,-3,-1,2,4,5]
for(var i = 0; i < arr.length; i++)
{
    for(var j = i+1; j < arr.length; j++)
    {
        var f_s = arr[i] * arr[i]
        var n_s = arr[j] * arr[j]
        if(f_s > n_s)
        {
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    console.log(arr[i]);
}