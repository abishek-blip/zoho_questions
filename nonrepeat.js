var str = "aabbcc"       //swiss,abc,aabbcc,aabbccd,aAbBcC,!!@@##$,NONE
var foundone = false
for(i = 0; i < str.length; i ++)
{
    var found = false
       
    for(j = 0; j < str.length; j ++)
    {
        if(i !=j && str[i] == str[j])
        {
           found = true
           break
        }
    }
    if(found == false)
    {
        console.log(str[i]);
        foundone = true
        break
    }
}
if(foundone == false)
{
    console.log("No Non Repeating Character Found");
}
