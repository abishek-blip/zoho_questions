var str = "a10b3c2"
var prev;
var num = 0
for(var i = 0; i < str.length; i++)
{
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90 || str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)
    {
        for(var j = 0; j < (num); j++)
        {
            console.log(prev);
        }
        prev = str[i]
        // num = ""
        num = 0
    }
    else
    {
        if(str[i] >= 0 && str[i] <= 9)
        {
            num = (num * 10) + str[i]
            // num = num + str[i]
        }
    }
}
for(var k = 0; k < (num); k++)
{
    console.log(prev);
}