let arr= [4,3,4,5,5,3,7]
let freq = {};
for (let i = 0; i < arr.length; i++)
{
    if (freq[arr[i]] == undefined)
    {
        freq[arr[i]] = 1;
    } else
    {
        freq[arr[i]]++;
    }

}
for (let key in freq)
{
    console.log(key + " appears " + freq[key] +  " times");
}
