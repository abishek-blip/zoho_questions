var n = 2
for(i = -n; i <= n; i++)
{
    var line = ''
    if( i < 0 )
    {
        l = -i
    }
    else
    {
        l = i
    }
    for(j = 0; j < n-l+1; j ++)
    {
            line = line + "* "
    }
    console.log(line)
}