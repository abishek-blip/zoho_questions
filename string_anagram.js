var str1 = "listen"
var str2 = "silent"
var array1 = []
var array2 = []
if(str1.length == str2.length)
{
    for(var i = 0; i < str1.length; i++)
    {   
        array1[i] = str1[i]
        array2[i] = str2[i]
    }
    var word1 =""
    for(var j = 0; j < array1.length; j ++)
    {
        for(var k = j + 1; k < array1.length; k ++)
        {
            if(array1[j].charCodeAt(0) > array1[k].charCodeAt(0))
            {
                var temp = array1[j]
                array1[j] = array1[k]
                array1[k] = temp
            }
        }
        word1 = word1 + array1[j]
    }
    var word2 =""
    for(var j = 0; j < array2.length; j ++)
    {
        for(var k = j + 1; k < array2.length; k ++)
        {
            if(array2[j].charCodeAt(0) > array2[k].charCodeAt(0))
            {
                var temp = array2[j]
                array2[j] = array2[k]
                array2[k] = temp
            }
        }
        word2 = word2 + array2[j]
    }
    if(word1 == word2)
    {
        console.log("true","(Given strings are Anagram)");
    }
    else
    {
        console.log("false","(Given strings are not Anagram)");
    }
}
else
{
    console.log("false","(Given strings are not Anagram)");
}


// var str1 = "listen"
// var str2 = "silent"
// var array1 = []
// var array2 = []
// if(str1.length == str2.length)
// {
//     for(var i = 0; i < str1.length; i++)
//     {   
//         array1[i] = str1[i]
//         array2[i] = str2[i]
//     }
//     var word1 =""
//     var word2 =""
//     for(var j = 0; j < array1.length; j ++)
//     {
//         for(var k = j + 1; k < array1.length; k ++)
//         {
//             if(array1[j].charCodeAt(0) > array1[k].charCodeAt(0))
//             {
//                 var temp1 = array1[j]
//                 array1[j] = array1[k]
//                 array1[k] = temp1
//             }
//             if(array2[j].charCodeAt(0) > array2[k].charCodeAt(0))
//             {
//                 var temp2 = array2[j]
//                 array2[j] = array2[k]
//                 array2[k] = temp2
//             }
//         }
//         word1 = word1 + array1[j]
//         word2 = word2 + array2[j]
//     }
//     if(word1 == word2)
//     {
//         console.log("true","(Given strings are Anagram)");
//     }
//     else
//     {
//         console.log("false","(Given strings are not Anagram)");
//     }
// }
// else
// {
//     console.log("false","(Given strings are not Anagram)");
// }