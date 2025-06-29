var n=2
for(i = -n; i <= n; i++)
{
    var line = ''
    if(i < 0)
    {
        l = -i
    }
    else
    {
        l = i
    }
    for(j = 0; j < 2*n-l+1 ; j++)
    {
        if(j < l)
        {
            line = line + "  "
        }
        else
        {
            line = line + "* "
        }
    }
    console.log(line);
}