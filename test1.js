var str = "1+5+*5-7*4"
var num1 = ""
var num2 = ""
var op = ""
var checkInvalid = false
var flag = false
for(var i = 0; i < str.length; i++)
{
    if(str[i] != "+" && str[i] != "-" && str[i] != "*" && str[i] != "/")
    {
        if(!flag)
        {
            num1 = str[i]
            flag = true
        }
        else
        {
            num2 = str[i]
            num1 = operation(num1,num2,op)
            op = ""
        }
    }
    else
    {
        if(op == "")
        {
            op = str[i]
        }
        else
        {
            console.log("Invalid")
            checkInvalid = true
            break
        }
    }
}
if(!checkInvalid)
{
    console.log(num1)
}

function operation(num1,num2,op)
{
    switch(op)
    {
        case "+":
            result = parseInt(num1) + parseInt(num2)
            break;
        
        case "-":
            result = parseInt(num1) - parseInt(num2)
            break;
            
        case "*":
            result = parseInt(num1) * parseInt(num2)
            break;
            
        case "/":
            result = parseInt(num1) / parseInt(num2)
            break;
        
        default:
            console.log("invalid")
            break;
    }
    return result.toString()
}
