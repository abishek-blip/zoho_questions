var num=153
var final=num
var res=0
var temp=0
var total=0
while(num>0)
{
    res=num%10
    total=res*res*res
    temp=temp+total
    num=parseInt(num/10)
}
if(final==temp)
{
    console.log("Armstrong");
}
else
{
    console.log("Not an Armstrong");
}