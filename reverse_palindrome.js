var n=525
var n2=n
var result=0
var temp=0
while(n>0)
{
    result=n%10
    temp=temp*10+result
    n=parseInt(n/10)
}
console.log("Reversed number is ");
console.log(temp);
if(n2==temp)
{
    console.log("Palindrome");
}
else
{
    console.log("Not a palindrome");
}