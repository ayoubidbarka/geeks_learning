// Building Management
//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2
console.log(building.numberOfFloors)
//3
let app = building.numberOfAptByFloor
console.log("firstfloor is ",app["firstFloor"],"and secandfloor is ",app["thirdFloor"])
//4
let tenant = building.numberOfRoomsAndRent["dan"];
let appr = tenant[0];
console.log("tenant dan has" , appr ," rooms in the apartment.")
let bug1 = building.numberOfRoomsAndRent["saraha"][1];
let bug2 = building.numberOfRoomsAndRent["david"][1];
let bug3 = building.numberOfRoomsAndRent["dan"][1];
if (bug1[1] + bug2[1] > bug3[1] ){ 
bug3[1] = 1200 ;
console.log("his buug is ",bug3[1]);
}