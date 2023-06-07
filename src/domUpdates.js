import { filterBookingsByUser,calculateTotalCostOfUsersBookings,filterRoomsByDate,filterRoomsByType } from "./bookings";

// Global Variables
const customer = document.querySelector('.customer')
let totalSpent = document.querySelector('.total-spent')
let totalBookings = document.querySelector('.all-bookings')
let bookingButton = document.querySelector('#search-bookings')
let searchResults = document.querySelector('.display-results')
let userDateInput = document.querySelector('#search-bar-date')
let userRoomInput = document.querySelector('#search-bar-room')
let userID



// Event Handelers

const getRandom = array => Math.floor(Math.random() * array.length);

const loadNewUserInfo = (userData,rooms,bookings) => {
    let userIndex = getRandom(userData) 
    customer.innerText = userData[userIndex].name
    let user = userData[userIndex]
    totalSpent.innerText = `$${calculateTotalCostOfUsersBookings(user,rooms,bookings)}`
    let usersBookings = filterBookingsByUser(user,rooms,bookings)
    usersBookings.forEach(booking => {
        totalBookings.innerHTML += 
        `<div class ="booking-container box">
            <p>Date: ${booking.date}<br>Room Type: ${booking.roomType}<br>Cost: ${booking.cost}</p>
        </div>`
      })
    }


const addNewBooking = (date,type,rooms,bookings) => {

searchResults.innerHTML = ''
let availableRoomsByType = filterRoomsByType(date,type,rooms,bookings)

if(availableRoomsByType !== 'NO ROOMS AVAILABLE') {  
availableRoomsByType.forEach(room => {
searchResults.innerHTML +=  `<div class ="result-container box">
<p>${room.roomType}<br>${room.bedSize}<br>Cost: ${room.costPerNight}</p>
<button id="make-booking">BOOK ROOM</button>
</div>`
    })
} 
if(availableRoomsByType === 'NO ROOMS AVAILABLE') {
    searchResults.innerHTML =  
    ` <p>NO ROOMS AVAILABLE</p>`
    }

}

export {
customer,
userID,
totalSpent,
totalBookings,
addNewBooking,
getRandom,
loadNewUserInfo,
bookingButton,
searchResults,
userDateInput,
userRoomInput,

}
