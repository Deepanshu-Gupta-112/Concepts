console.log(10+7); 
b=10+"a"; 
console.log(b);
console.log(typeof b);
console.log(parseInt("10")+10);

// strings 
console.log("hello");
console.log("super super".length);
console.log("chris"+" "+"world"+"[");
console.log("i want food".toUpperCase());

// booleans 
console.log(false);
var a=false;
console.log(a==true);


//objects
//collection of name-value pairs
var myname={1:"chiris"};
console.log(myname);

var myobject=new Object();
myobject['1']="chris";
myobject['2']="cev";
myobject['3']="cwr";
console.log(myobject);

var myotherobejct={
  1:"chris",
  2:"sally",
  3:"bob"
};
console.log(myotherobejct);

var nestedobject={
 firstname:"chirs",
 last:"smith",
 age:50,
 number:{
   mobile:"111111",
   home:"ddddd",
      },
      address:"dwarka",
};
console.log(nestedobject);
console.log(nestedobject.number.mobile);
console.log(typeof(nestedobject.number.mobile));


// functions
function sayHi(){
    console.log('hi');
}
sayHi();

//calling functions in object
var world={
    a:"hell",
    b:"work",
     hi: function() {
        console.log("hellos ");
    }
}
console.log(world.hi());



//arrays
// collection of data
var array=[1,2,3,"hello"];
console.log(array[1]);

// var and constant