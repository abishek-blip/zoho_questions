var str = "bcad"
var array = []
for(var a = 0; a < str.length; a++)
{
    array[a] = str[a]
}
var arraytostring =""
for(var i = 0; i < array.length; i ++)
{
    for(var j = i + 1; j < array.length; j ++)
    {
            if(array[i].charCodeAt(0) > array[j].charCodeAt(0))
            {
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
    }
    arraytostring = arraytostring + array[i]
}
console.log(arraytostring);