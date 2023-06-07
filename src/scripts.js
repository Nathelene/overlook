// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import { savePromises } from './apiCalls';
import { loadNewUserInfo, bookingButton, addNewBooking,userDateInput,userRoomInput } from './domUpdates';

console.log('This is the JavaScript entry file - your code begins here.');

let customers;
let rooms;
let bookings;
let date;
let type;

// Event Listeners
window.addEventListener('load', () => {
    savePromises()
        .then(data => {
            customers = data[0].customers
            rooms = data[1].rooms
            bookings = data[2].bookings
            loadNewUserInfo(customers,rooms,bookings)
        });
});

bookingButton.addEventListener('click', () => {
    savePromises()
    .then(data => {
        customers = data[0].customers
        rooms = data[1].rooms
        bookings = data[2].bookings
        date = userDateInput.value
        type = userRoomInput.value
        addNewBooking(date,type,rooms,bookings)
    });
    
  

})
