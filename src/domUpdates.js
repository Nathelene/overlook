import { filterBookingsByUser,calculateTotalCostOfUsersBookings,filterRoomsByType } from "./bookings";

// Global Variables
let customer = document.querySelector('.customer')
let totalSpent = document.querySelector('.total-spent')
let totalBookings = document.querySelector('.all-bookings')
let bookingButton = document.querySelector('#search-bookings')
let searchResults = document.querySelector('.display-results')
let bookingResult = document.querySelector('.booking-result')
let userDateInput = document.querySelector('#search-bar-date')
let userRoomInput = document.querySelector('#room-type')
let addBookingButton = document.querySelector('.make-booking')
let mainPage = document.querySelector("main")
let loginPage = document.querySelector(".user-login")
let username = document.querySelector("#search-bar-username")
let password = document.querySelector("#search-bar-pw")
let loginButton = document.querySelector(".login-button")
let userID
let currentUser
let userBookings



// Event Handelers

const loadUserOnLogin = (userData,rooms,bookings) => {
    if (username.value.length === 10) {
     userID = Number(username.value.slice(-2))
    }
    if (username.value.length === 9) {
    userID = Number(username.value.slice(-1))
    }
     currentUser = userData.find(user => {
        return user.id === userID
    })

    if(username.value === `customer${userID}` && password.value === 'overlook2021') { 
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden')
    customer.innerText = currentUser.name
    totalSpent.innerText = `$${calculateTotalCostOfUsersBookings(currentUser,rooms,bookings)}`
    userBookings = filterBookingsByUser(currentUser,rooms,bookings)
    userBookings.forEach(booking => {
    totalBookings.innerHTML += 
    `<div class ="booking-container box">
        <p>Date: ${booking.date}<br>Room Type: ${booking.roomType}<br>Cost: $${booking.cost}</p>
    </div>`
    });
 }

};

const addNewBooking = (date,type,rooms,bookings) => {
searchResults.innerHTML = ''
let availableRoomsByType = filterRoomsByType(date,type,rooms,bookings)
bookingResult.classList.add('hidden') 
if(availableRoomsByType !== 'NO ROOMS AVAILABLE' && availableRoomsByType !== 'DATE INVALID') { 

availableRoomsByType.forEach(room => {
searchResults.innerHTML +=  `<div class ="result-container box" role="button">
<p>${room.roomType}<br>${room.bedSize}<br>Cost: ${room.costPerNight}</p>
<button class="make-booking" id="${room.number}">BOOK ROOM</button>
</div>`
 });
}
if(availableRoomsByType === 'NO ROOMS AVAILABLE') {
    searchResults.innerHTML = ''
    bookingResult.classList.remove('hidden')
    bookingResult.innerHTML =  
    ` <div class="none-available"><p>NO ROOMS AVAILABLE</p></div`
    }
if(availableRoomsByType === 'DATE INVALID' ) {
    searchResults.innerHTML = ''
    bookingResult.classList.remove('hidden')
    bookingResult.innerHTML =  
    ` <div class="none-available"><p>DATE INVALID</p></div`
 }
 displayUserSearchError()
};


const displayUserSearchError = () => {
    if(!userDateInput.value) {
        searchResults.innerHTML = ''
        bookingResult.classList.remove('hidden')
        userDateInput.placeHolder = "PLEASE FILL OUT THIS FIELD"
        bookingResult.innerHTML = 
        ` <div class="error-message"><p>PLEASE SELECT DATE</p></div>`
    }
    if(!userRoomInput.value) {
        searchResults.innerHTML = ''
        bookingResult.classList.remove('hidden')
        userRoomInput.placeHolder = "PLEASE FILL OUT THIS FIELD"
        bookingResult.innerHTML =  
        ` <div class="error-message"><p>PLEASE SELECT ROOM TYPE</p></div>`
    } 
};

const displayBookingMadeMessage = (date,roomNumber,type) => {
 searchResults.innerHTML = ''
 bookingResult.classList.remove('hidden')
 bookingResult.innerHTML = 
     `<div class=booking-result-text>
     <p>YOUR BOOKING IS CONFIRMED. THANK YOU!<br/>
     ${date}<br>
      Room: ${roomNumber}<br>
     ${type} 
     </p>
     </div>`
};


export {
customer,
userID,
totalSpent,
totalBookings,
bookingButton,
searchResults,
userDateInput,
userRoomInput,
addBookingButton,
mainPage,
username,
password,
loginButton,
currentUser,
loginPage,
userBookings,
bookingResult,
addNewBooking,
displayUserSearchError,
displayBookingMadeMessage,
loadUserOnLogin
}
