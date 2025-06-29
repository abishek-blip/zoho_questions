var a = 20
var b = 100
if(a < 200 && b < 200)
{
    for(var i = 1; i < b; i++)
    {
        if(i*i >= a && i*i <= b)
        {
            console.log(i*i);
        }
        else
        {
            if(i*i > b)
            {
                break
            }
        }
    }
}
else
{
    console.log("a or b is not less than 200");
}