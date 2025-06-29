var para = "abc def  ghi "
var countspace = 0
var count = 0
var space = " "
while( count < para.length )
{
    if( para[count] == space )
    {
        countspace = countspace + 1
    }
    count ++
}
console.log(countspace);
