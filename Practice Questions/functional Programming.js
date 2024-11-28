//using for each function
const Price = [1000,1500,3000,4500]
var output =[];
Price.forEach(function(item, idx){
    output.push (item*0.5)
})
console.log(output);

//using map function
const amount = [3000,4000,5000,8000]
const newprice = amount.map(function(item,idx){
    return item*0.5;
})
console.log(newprice);
//using filter method 
const courses = ["Javascript","cpp","python","reactjs"]
const b = courses.filter(function(item,idx){
    if((item.length>5)){
        return true;
    }
    return false;
})
console.log(b);

//using reduce method 
const a = [10,20,30,40,50]
const result = a.reduce((acc,curr)=>acc+curr,0);
console.log(result);

//using every method
const arr1 = ["abc","def","ghi",200]
const arr2 = arr1.every((item,idx)=>typeof item==String);
console.log(arr2);

//using find menthod 
const x= ["abc","def","ghi","jkl"]
const y = x.find((item,idx)=>item==="acb");
console.log(y);

//using comparison method 
const numbers=[10,3,5,2,1,8,26,90,100]
const sortednumbers = numbers.sort(function(a,b){
    if (a>b){
        return 1;
    }
    if (a<b){
        return -1;
    }
    return 0;
})
console.log(sortednumbers);

//by using map method 
// Tea preparation functions
const prepareGreenTea = () => "Green Tea";
const prepareBlackTea = () => "Black Tea";

// Using map to prepare Green Tea
const tea4GreenTeamFCC = Array(27).fill().map(prepareGreenTea);

// Using map to prepare Black Tea
const tea4BlackTeamFCC = Array(13).fill().map(prepareBlackTea);

console.log("Green Team Tea:", tea4GreenTeamFCC);
console.log("Black Team Tea:", tea4BlackTeamFCC);

//by using some method 
function checkpositivenum (arr){
    return arr.some(function(item,idx){
         return item>0;
    })

}
console.log(checkpositivenum ([1,-2,-4,-3]));
console.log(checkpositivenum ([-1,-2,-4,-3]));

//using bind method
function sum(x,y,z){
    return x+y+z;
}
const partialsum=sum.bind(null,10,20);
console.log(partialsum(20));

//using curring method 
function Add(x){
    return function (y){
        return function (z){
            return x+y+z;
        }
    }
}
console.log(Add(10)(20)(30));