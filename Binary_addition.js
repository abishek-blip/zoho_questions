var a = "1111"
var b = "1"
var high;
var diff;
var array1 = []
var array2 = []
var final = []
if(b.length > a.length)
{
    high = b.length
    diff = high - a.length
}
else if(a.length > b.length)
{
    high = a.length
    diff = high - b.length
}
else
{
    high = a.length
    diff = 0
}

for(var i = 0; i < high; i++)
{
    if(diff > 0)
    {
        array1.push(0)
        diff--
    }
    else
    {
        array1.push(parseInt(a[i]))
    }
    if(b.length < high && i < high - b.length) 
    {
        array2.push(0)
    } 
    else 
    {
        array2.push(parseInt(b[i - (high - b.length)]))
    }
}
console.log("arr1 = ",array1)
console.log("arr2 = ",array2)
var carry = 0
for(var j = high-1; j >= 0; j--)
{
    
    var res = array1[j] + array2[j] + carry
    carry = 0
    
    if(res > 1)
    {
        if(res == 2)
        {
            final.push(0)
            carry = 1
        }
        else if(res == 3)
        {
            final.push(1)
            carry = 1
        }
    }
    else
    {
        final.push(res)
    }
}
if(carry == 1)
{
    final.push(1)
}
var line = ""
for(var p = final.length-1; p >= 0; p--)
{
    line = line + final[p]
}
console.log(line);
