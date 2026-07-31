
let side1 = 5;
let side2 = 4;
let side3 = 3;
if (side1 == side2 && side1==side3 ) 
{
    console.log("Equilateral");
} else if(side2==side3 || side3==side1 || side1==side2)
{
    console.log("Isosceles");
} else
{
    console.log(" Scalene");
}
