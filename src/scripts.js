// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/styles.css';
import './images/clipart895215.png';
import './images/pexels-engin-akyurt-2725675.jpg';
import { savePromises,postApi } from './apiCalls';
import { bookingButton, addNewBooking,userDateInput,userRoomInput,userID, searchResults,displayBookingMadeMessage,loginButton,loadUserOnLogin,loginPage, makeCurrentDate } from './domUpdates';

console.log('This is the JavaScript entry file - your code begins here.');

let customers;
let rooms;
let bookings;
let date;
let type;
let roomNumber;
let todaysDate;


// Event Listeners
window.addEventListener('load', () => {
    loginPage.classList.remove('hidden')
});

bookingButton.addEventListener('click', () => {
    savePromises()
    .then(data => {
        customers = data[0].customers
        rooms = data[1].rooms
        bookings = data[2].bookings
        date = userDateInput.value
        type = userRoomInput.value
        todaysDate = makeCurrentDate()
        addNewBooking(date,type,rooms,bookings,todaysDate)
    });
    
});

searchResults.addEventListener('click', event => {
    date = userDateInput.value.split("-").join("/")
    type = userRoomInput.value
    roomNumber = Number(event.target.id)
    if(event.target.className === 'make-booking'){
    postApi(userID,date,roomNumber)
    displayBookingMadeMessage(date,roomNumber,type)
        }
    });

loginButton.addEventListener('click', () => {
    savePromises()
    .then(data => {
        customers = data[0].customers
        rooms = data[1].rooms
        bookings = data[2].bookings
        loadUserOnLogin(customers,rooms,bookings)
    });

});