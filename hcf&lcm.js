var num1 = 24
var num2 = 36
if(num1 > num2)
{
    var temp1 = num1
    var temp2 = num2
}
else
{
    var temp1 = num2
    var temp2 = num1
}
while(temp1 % temp2 != 0)
{
    rem = temp1 % temp2
    temp1 = temp2
    temp2 = rem
}
var hcf = temp2
console.log("HCF ---",hcf);
var lcm = (num1 * num2) / hcf
console.log("LCM ---",lcm);