var flat ={
    price: 3888773,
    owner: "Nur",
    color: 'multi-color',
    size: 'family size',
    flor: 5
};
console.log(flat.owner);
// you can also keep property of an Object in a var

// set a object property value
flat.price = 207373774;
console.log(flat.price)

// different ways to set value of an Object property

flat.price = 477262;
flat['price'] = 100990;

var flatprice = 'price';
flat[flatprice] = 764847;

console.log(flat);  

// you can change value of a property of a Object in
// three different ways

// ***1. write the Object name, then . then property ,
//  after then = sign & property value

flat.size = 'single';

// ***2. write the Object name, then [ then 'property'] ,
//  after then = sign & property value
flat['owner'] = 'asrafi';

// / ***3. at first declare a var. in the var's value keep the property name you want change 
// in the next line write the Object name, then in [] write the var 
//  after then = sign & property value
var flatprice1 = 'price';
flat[flatprice1] = 907778;
console.log(flat);