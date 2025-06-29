var petrolInCar = 2
var distance = [1, 5, 3]                //Petrol_Bunks = [A, B, C]
var capacities = [6, 4, 2]
var canTravel = true
for(var i = 0; i < distance.length; i++)
{
    if(petrolInCar >= distance[i])
    {
        petrolInCar = petrolInCar - distance[i]

        petrolInCar = petrolInCar + capacities[i]
    }
    else
    {
        canTravel = false
        // console.log(i)
        console.log("He cannot travel, out of petrol");
        break
    }
}
if(canTravel == true)
{
    console.log("Remaining petrol in car is", petrolInCar, "liters");
}