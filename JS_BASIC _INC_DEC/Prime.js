
const num = 19;
let f = true;
for (let i = 2; i <= Math.sqrt(num); i++)
{
    if (num % i == 0)
    {
        console.log("NO");
        f = false;
        break;
    }
}
if (f == true)
{
    console.log("YES");
}