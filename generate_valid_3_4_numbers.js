var n = 15
var i = 1
var count = 0
while(count < n)
{
    var flag = 1
    var temp = i
    while(temp > 0)
    {
        var num = temp % 10
        if(num != 3 && num != 4)
        {
            flag = 0
            break
        }
        temp = parseInt(temp / 10)
    }
    if(flag == 1)
    {
        console.log(i)
        count = count + 1
    }
    i = i + 1
}


// var n = 20
// var queue = ["3", "4"]  
// var front = 0
// var rear = 2
// var count = 0

// while (count < n) 
// {
//     var current = queue[front]
//     front = front + 1

//     console.log(current)
//     count = count + 1

//     queue[rear] = current + "3"
//     rear = rear + 1

//     queue[rear] = current + "4"
//     rear = rear + 1
// }