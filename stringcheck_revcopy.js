var str = "A man,  i n t he boat says : I see 1-2-3 in the sky"
var rev = ""
var result = ""
var count = 0
for(var i = str.length-1; i >= 0; i--)
{
    if(check(str[i]))
    {
        rev+=str[i]
    }
}
console.log(str)
console.log(rev)
for(var i = 0; i < str.length; i++)
{
    if(check(str[i]))
    {
        result+= rev[count]
        count++
    }
    else
    {
        result+=str[i]
    }
}
console.log(result);

function check(value)
{
    if(value >= "0" && value <= "9" || value.charCodeAt(0)>=65 && value.charCodeAt(0)<=90 || value.charCodeAt(0)>=97 && value.charCodeAt(0)<=122)
    {
        return true
    }
    else
    {
        return false
    }
}
