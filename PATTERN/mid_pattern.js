var str = "PROGRAM"
var mid = parseInt(str.length/2)
var n = str.length
var temp = ""
for(var i = 0; i < n; i++)
{
    var line = ""
    temp += str[mid]
    for(var s = 0; s < (n-i)-1; s++)
    {
        line += " "
    }
    console.log(line+temp)
    mid++
    if(mid == str.length)
    {
        mid = 0
    }
}