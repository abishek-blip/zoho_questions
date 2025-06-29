function isBinaryPalindrome(n)
{
    var num = n
    var binary = 0
    var place = 1
    while(num > 0)
    {
        var bit = num % 2
        binary = binary + bit * place
        place = place * 10
        num = parseInt(num/2)
    }

    var originalBinary = binary
    var reversed = 0
    var temp = binary
    while(temp > 0)
    {
        var digit = temp % 10
        reversed = reversed * 10 + digit
        temp = parseInt(temp/10)
    }

    if(originalBinary == reversed)
    {
        console.log("Palindrome")
    }
    else
    {
        console.log("Not a Palindrome")
    }
}
isBinaryPalindrome(6)