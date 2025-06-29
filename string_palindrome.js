var str1 = "bmadamd"
var str2 = ""
for(var i = 0; i < str1.length; i++) 
{
    str2 = str1[i] + str2
}
console.log(str2);
var palin =""
var r = 0
for(var j = 0; j < str1.length; j++)
{
    for(var k = r; k < str2.length; k++)
    {
            if(str1[j] == str2[k])
            {
                palin = palin + str2[k]
                r = k + 1
                break
            }
    }
}
console.log(palin);