var num = [0,1,0,3,12]
var result = []
for(var i = 0; i < num.length; i++)
{
    if(num[i] != 0)
    {
        result.push(num[i])
    }
}
for(var j = result.length; j < num.length; j++)
{
    result.push(0)
}
console.log(result)