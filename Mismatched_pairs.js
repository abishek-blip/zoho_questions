var str1 = "abcdefhi"
var str2 = "abdeegii"
for(var i = 0; i < str1.length; i++)
{
    if(str1[i] != str2[i])
    {
        if(str1[i+1] != str2[i+1])
        {
            console.log(str1[i]+str2[i]+","+str1[i+1]+str2[i+1]);
        }
        else
        {
            if(str1[i-1] == str2[i-1])
            {
                console.log(str1[i]+","+str2[i]);
            }
        }
    }
}



// var str1 = "abcdefghi"
// var str2 = "abdeeggii"
// for(var i = 0; i < str1.length; i++)
// {
//     if(str1[i] != str2[i])
//     {
//         console.log(str1[i]+str2[i])
//     }
// }