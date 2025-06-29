var arr = [-2,7,9,-1,3,2,9,-7,8,7,9]
var res = []
var total = 0
var index = 0
var temp = []
var temp2 = 0
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] > 0)
    {
        temp.push(arr[i])
        total += arr[i]
    }
    else if(total > 0)
    {
        if(total > temp2)
        {
            res.push(temp)
            temp2 = total
            total = 0
            index++
        }
        temp = []
    }
}
if(total != 0 && total > temp2)
{
    res.push(temp)
    temp2 = total
    index++
}
console.log("Sum:",temp2)
console.log("Elements:",res[index-1])





//2
var arr = [-2,7,9,-1,3,2,9,-7,8,7,9]
var strval = []
var totval = []
var temp = ""
var total = 0

for(var i = 0; i < arr.length; i++)
{
    if(arr[i] > 0)
    {
        if(temp.length > 0)
        {
            temp += "," + arr[i]
        }
        else
        {
            temp += arr[i]
        }
        total += arr[i]
    }
    else if(total > 0)
    {
        strval.push(temp)
        totval.push(total)
        temp = ""
        total = 0
    }
}
if(total > 0 && temp != "")
{
    strval.push(temp)
    totval.push(total)
    temp = ""
    total = 0
}
var index;
for(var j = 0; j < totval.length; j++)
{
    if(totval[j] > total)
    {
        total = totval[j]
        index = j
    }
}
console.log("Sum:",totval[index]);
console.log("Elements:",strval[index]);