var str = "ABC"
var result = ""
for(var i = 0; i < str.length; i++)
{
    for(var j = 0; j < str.length; j++)
    {                                               // if(i != j)  --> go to 'k' for loop
        for(var k = 0; k < str.length; k++)
        {
            if(i != j && j != k && i != k)
            {
                result = str[i] + str[j] + str[k]
                console.log(result);
            }
        }
    }
}