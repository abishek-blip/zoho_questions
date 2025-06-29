var str = "is the is the and"
var strword = ""
var words = []
var unic = []
var wordcount = []
for(i = 0; i < str.length; i++)
{
    if( str[i] != " ")
    {
        strword = strword + str[i]
    }
    else
    {
        words.push(strword)
        strword = ""
    }
}
if(strword.length != 0 && strword != "")
{
    words.push(strword)
    strword = ""
}


for(r = 0; r < words.length; r ++)
{
    found = false
    for(s = 0; s < unic.length; s ++)
    {
        if(words[r] == unic[s])
        {
            wordcount[s] ++
            found = true
            break
        }
    }
    if(found == false)
    {
        unic.push(words[r])
        wordcount.push(1)
    }
}
for(p = 0; p < unic.length; p ++)
{
    console.log(unic[p], "==", wordcount[p]);
}