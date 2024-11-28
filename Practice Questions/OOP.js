let human = {
    name:'Ali',
    numhands: 2,
    //create method
    sayname : function() {return 'My name is '+ human.name + '.'}
};
console.log(human.sayname());
 //using this keyword
 let car ={
    name:'Landcruiser',
    model:2022,
    sayname : function() {return 'the car name is ' +this.name+ '.'
    }
 };
 console.log (car.sayname());
 
 //constructor method
 function Bird() {
    this.name = 'parrot';
    this.color = 'blue';
    this.legs = 2;
}
let myBird = new Bird()
console.log(myBird.name,myBird.color,myBird.legs);
//create new object 
let Sparrow = new Bird()
console.log (Sparrow);

//by receive arguments
function Bird(name,color,legs) {
    this.name = name;  
    this.color = color;
    this.legs = 2;
}
let Pigeon = new Bird('Daisy','grey',2)
console.log (Pigeon);

//instance of 
function House(NumBedrooms){
    this.NumBedrooms= NumBedrooms;
}
let myhouse = new House(3)
myhouse instanceof House
console.log (myhouse instanceof House);

//using hasownproperty
function checkProperty() {

    function Car(a, b) {
        this.model = a;
        this.name = b;
    }

    let car1 = new Car("Mazda", "Laputa");

    result1 = car1.hasOwnProperty("model");

    result2 = car1.hasOwnProperty("wheels");

    console.log(result1);

    console.log(result2);
}
checkProperty()

//Prototype
function Dog (name){
    this.name= name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog('Snoopy');
console.log(beagle.numLegs);

//Seprate own and prototype properties
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let cowdy = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let property in cowdy) {
    if (cowdy.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property); 
    }
  }
  
  console.log(ownProps); 
  console.log(prototypeProps); 

  //contructor property
  function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    return candidate instanceof Dog; // Check if candidate is an instance of Dog
  }
  
  // Test cases
  let jane = new Dog("Snoopy");
  console.log(joinDogFraternity(jane));
  
  let notADog = { name: "Random" };
  console.log(joinDogFraternity(notADog)); 

  //prototype chain
  function Dog(name) {
    this.name = name;
  }
  
  let woo = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(woo); 
  
  Object.prototype.isPrototypeOf(Dog.prototype); 
   
  