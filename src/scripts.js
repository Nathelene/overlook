// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import { savePromises } from './apiCalls';
import { loadNewUser, loadTotalSpent } from './domUpdates';

console.log('This is the JavaScript entry file - your code begins here.');

let customers;
let rooms;
let bookings;

// Event Listeners
window.addEventListener('load', () => {
    savePromises()
        .then(data => {
            customers = data[0].customers
            rooms = data[1].rooms
            bookings = data[2].bookings
            loadNewUser(customers,rooms,bookings)
            // loadTotalSpent(customers,rooms,bookings)
        });
});