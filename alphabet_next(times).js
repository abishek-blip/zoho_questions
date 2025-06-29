var str = "a10b3c2"
var prev;
var num = ""
var result = ""
for(var i = 0; i < str.length; i++)
{
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90 || str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)
    {
        if(prev != undefined && num != "")
        {
            for(var j =0; j < parseInt(num); j++)
            {
                console.log(prev);
                // result += prev;
            }
        }
        prev = str[i]
        num = ""
    }
    else
    {
        if(str[i] >= 0 && str[i] <= 9)
        {
            num += str[i]
        }
    }
}
if(prev != undefined && num != "")
{
    for(var j =0; j < parseInt(num); j++)
    {
        console.log(prev);
        // result += prev;
    }
}
// console.log(result);