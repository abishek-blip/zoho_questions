var d1 = 14
var m1 = 5
var y1 = 2017
var x = 37
var d2,m2,y2;
if(x > 0 && (x+d1) <= 31)
{
    d2 = x + d1
    m2 = m1
    y2 = y1
}
else if((x + d1) > 31)
{
    var rem = (x + d1) % 31
    var quo = parseInt((x + d1) / 31)
    d2 = rem
    if((m1 + quo) <= 12)
    {
        m2 = m1 + quo
        y2 = y1
    }
    else if((m1 + quo) > 12)
    {
        var rem2 = (m1 + quo) % 12
        var quo2 = parseInt((m1 + quo) / 12)
        m2 = rem2
        y2 = y1 + quo2
    }
}
else
{
    if(x >= 366)
    {
        var rem3 = x % 366
        var quo3 = parseInt(x / 366)
        y2 = y1 + quo3
        d2 = d1 + rem3
        m2 = m1
    }
}
console.log("d2 = ",d2);
console.log("m2 = ",m2);
console.log("y2 = ",y2);