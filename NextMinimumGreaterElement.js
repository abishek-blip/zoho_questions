var arr = [2, 3, 7, -1, 8, 5, 11];
var res = [];
for (var i = 0; i < arr.length; i++) 
{
    var current = arr[i];
    var minGreater = 0;
    var found = false;

    for (var j = 0; j < arr.length; j++) 
    {
        if (i !== j && arr[j] > current) 
        {
            if (found == false || arr[j] < minGreater) 
            {
                minGreater = arr[j];
                found = true;
            }
        }
    }
    if (found == false) 
    {
        res.push(current + "->empty");
        // res[res.length] = current + "->empty";
    } 
    else 
    {
        res.push(current + "->" + minGreater);
        // res[res.length] = current + "->" + minGreater;
    }
}
console.log(res)
// for (var k = 0; k < res.length; k++) {
//     console.log(res[k]);
// }