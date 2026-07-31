let arr=[3,4,8,20]
let max = arr[0];
for (let i = 0; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
    
}
console.log(max);