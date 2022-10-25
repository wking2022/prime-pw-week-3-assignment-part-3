console.log( ' A Cart Function ');
/* Below is a global variable, named 'basket' thats set to an empty array */


let basket = [];
/* Below is a function called 'addItem */
function addItem( item ){ 
    basket.push( item );
    return true;
}
console.log(addItem( 'Pants' ));
console.log(addItem( 'Hat' ));
console.log(addItem( 'Shoes' ));
console.log(addItem( 'Shirt' ));
console.log(addItem( 'Belt' ));
console.log(addItem( 'Necklace' ));

/* Created a function called `listItems` */
function listItems(){
}

console.log();

for (let made of basket){
    console.log( 'Display items added:', made);
}

let empty = basket *= 0;
console.log(empty +=2);