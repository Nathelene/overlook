import { filterBookingsByUser,calculateTotalCostOfUsersBookings } from "./bookings";

// Global Variables
const customer = document.querySelector('.customer')
let totalSpent = document.querySelector('.total-spent')
let totalBookings = document.querySelector('.all-bookings')
let userID



// Event Handelers

const getRandom = array => Math.floor(Math.random() * array.length);

const loadNewUserInfo = (userData,rooms,bookings) => {
    let userIndex = getRandom(userData) 
    customer.innerText = userData[userIndex].name
    let user = userData[userIndex]
    totalSpent.innerText = `${calculateTotalCostOfUsersBookings(user,rooms,bookings)}`
    let usersBookings = filterBookingsByUser(user,rooms,bookings)
    usersBookings.forEach(booking => {
        totalBookings.innerHTML += 
        `<div class ="booking-container box">
            <p>Date: ${booking.date}<br>Room Type: ${booking.roomType}<br>Cost: ${booking.cost}</p>
        </div>`
      })
    }



export {
customer,
userID,
totalSpent,
totalBookings,
getRandom,
loadNewUserInfo,
}
