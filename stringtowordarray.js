var str="  this is   ponmani  "
var word=""
var words=[]
for(i = 0; i < str.length; i ++)
{
    if( str[i] != " ")
    {
        word = word + str[i]
    }
    else
    {
        if(word != "" && word != " ")
        {
            words.push(word)
            word = ""
        }
    }
}
if(word != "" && word != " ")
{
    words.push(word)
    word = ""
}
console.log(words);
for(r = 0; r < words.length; r ++)
{
    console.log(words[r]);
}