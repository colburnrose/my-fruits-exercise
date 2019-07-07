import fruits from './foods';
import {choice, remove} from './helper';


// Randomly draw a fruit from the array
let fruit = choice(fruits);


function response(fruit) {
    //Log the message “I’d like one RANDOMFRUIT, please.”
    console.log(`I’d like one ${fruit}, please.` );
    // Log the message “Here you go: RANDOMFRUIT”
    console.log(`Here you go: ${fruit}`)
    // Log the message “Delicious! May I have another?”
    console.log(`Delicious! May I have another?`);
    // Remove the fruit from the array of fruits
    let remaining = remove(fruits, fruit);
    // Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
    console.log(`I’m sorry, we’re all out. We have ${remaining} left.`);
}

response(fruit);