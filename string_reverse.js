var names = "aba"
var count = 0
while( names[count] != undefined)
{
    count ++
}
var len = count - 1
var line = ''
for ( i = len; i >= 0; i --)
{
    line = line + names[i]
}
console.log(line);
if(names == line)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}