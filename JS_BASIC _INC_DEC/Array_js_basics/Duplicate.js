let arr = [1, 2, 3, 2, 4, 1];

let flag = false;
let res = "";

for (let i = 0; i < arr.length; i++)
{
    for (let j = i + 1; j < arr.length; j++)
    {
        if (arr[i] === arr[j])
        {
            flag = true;
            res = arr[i] + " " + res;
            break;
        }
    }
}

if (flag) {
    console.log(res);
} 
else {
    console.log("No duplicates found");
}