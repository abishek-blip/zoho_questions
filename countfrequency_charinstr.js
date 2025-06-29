var str = "aabccc"
var letter = []
var count = []
for(var i = 0; i < str.length; i++)
{
    found = false
    for(var j = 0; j < letter.length; j++)
    {
        if(str[i] == letter[j])
        {
            count[j]++
            found = true
            break
        }
    }
    if(found ==false)
    {
        letter.push(str[i])
        count.push(1)
    }
}
//console.log(letter,count);
for(var k = 0; k < letter.length; k++)
{
    console.log(letter[k],":",count[k]);
}