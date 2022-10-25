// console.log( ' A Cart Function ');
// /* Below is a global variable, named 'basket' thats set to an empty array */


let basket = [];
function addItem( stringItem ){
    basket.push( stringItem );
        return true;
    }

console.log(addItem('Breakfast'));
console.log('This is what\s now in my basket:', basket);
console.log(addItem('Lunch'));
console.log('This is what\s now in my basket:', basket);
console.log(addItem('Snack'));
console.log('This is what\s now in my basket:', basket);
console.log(addItem('Dinner'));
console.log('This is what\s now in my basket:', basket);


function empty( numby ){
    basket.splice( numby );
}
console.log(empty());
console.log(basket);

console.log(addItem('Mid-day Snack'));
console.log('This is what\s now in my basket:', basket);
console.log(addItem('Apples'));
console.log('This is what\s now in my basket:', basket);
console.log(addItem('Celery'));
console.log('This is what\s now in my basket:', basket);

console.log(empty());
console.log(basket);