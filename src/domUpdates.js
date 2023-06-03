import { filterBookingsByUser,calculateTotalCostOfUsersBookings } from "./bookings";

// Global Variables
const customer = document.querySelector('.customer')
let totalSpent = document.querySelector('.total-spent')
let userID



// Event Handelers

const getRandom = array => Math.floor(Math.random() * array.length);

const loadNewUser = (userData,rooms,bookings) => {
    let userIndex = getRandom(userData) 
    customer.innerText = userData[userIndex].name
    let user = userData[userIndex]
    totalSpent.innerText = `${calculateTotalCostOfUsersBookings(user,rooms,bookings)}`
    }



export{
customer,
userID,
totalSpent,
getRandom,
loadNewUser,
// loadTotalSpent
}
