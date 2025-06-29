console.log(add(5));
function add(n) 
{
    if(n == 0)
    {
        return 0
    }
    return n + add(n - 1)
}