var str1 = "tests1234trin1234g124";
var str2 = "1234";
var found = false; 

for (var i = 0; i <= str1.length - str2.length; i++) 
{
    var match = true;  
    for (var j = 0; j < str2.length; j++) 
    {
        if (str1[i + j] !== str2[j]) 
        {
            match = false;
            break;
        }
    }

    if (match == true) 
    {
        console.log("Index:", i);
        found = true;  
    }
}

if (found == false) 
{
    console.log("Index:", -1);
}
