//Sum of 2 numbers
function Sumarr(arr){
    const min =Math.min(arr[0],arr[1]);
    const max = Math.max(arr[0],arr[1]);

    let sum = 0;
    for (let i=min;i<=max;i++ ){
        sum +=i;
    }
    return sum;
}
console.log(Sumarr([4,1]));
console.log(Sumarr([1,4]));

//diff two arrays
function Diffarr(arr1,arr2){
    const uniquearr1 = arr1.filter(item => !arr2.includes(item));
    const uniquearr2 = arr2.filter(item => !arr1.includes(item));

const newarr =uniquearr1.concat(uniquearr2);
return newarr; 
}
console.log(Diffarr([1,2,3,4],[1,2,3,4,5]));
console.log(Diffarr([], [1, 2, 3]));

//seek and destroy 
function destroy(arr){
    const removeitems = Array.from(arguments).slice(1);

    return arr.filter(item => !removeitems.includes(item));
}
console.log(destroy([1,2,3,4,2],2,3));

//higher order function
//Set Interval
var timeout = setInterval(function(){
    console.log("the time is");
    console.log(new Date());
    clearInterval(timeout);
},6000);

//destructuring
const user = {
    name : "Ramsha",
    id :"2",
    address: {
        city:"lahore",
        province:"Punjab",
    }
}

const {name,id}=user;
const {address:{city}}=user;
console.log ("name is:",name);
console.log("id is:",id);
console.log("city is:",city);

//destructuring in array 
const colors =["red","blue","pink","yellow","green"]
const {2:color3}=colors;
console.log("color 2 is",color3);


