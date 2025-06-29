var num = [10,70,30,40,50,60,20]
for(i = 0; i < num.length; i++)
{
    for(j = i + 1; j < num.length; j++)
    {
        if(num[i] < num[j])
        {
            temp = num[j]
            num[j] =num[i]
            num[i] = temp
        }
    }
}
for(p = 0; p < num.length; p++)
{
    console.log(num[p]);
}