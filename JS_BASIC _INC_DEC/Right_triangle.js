const n=5;
for (let i = 1; i <=n; i++)
{
    let space = "";
     for (let j = 0; j < n-i; j++)
        space+=" ";
    let pattern = "";
    for (let j = 0; j < (i*2-1); j++)
        pattern+="*";
    console.log( space+ pattern );
}
