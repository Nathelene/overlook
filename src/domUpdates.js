import { filterBookingsByUser,calculateTotalCostOfUsersBookings } from "./bookings";

// Global Variables
const customer = document.querySelector('.customer')
let userID




// Event Handelers

const getRandom = array => Math.floor(Math.random() * array.length);

const loadNewUser = (userData) => {
    let userIndex = getRandom(userData) 
   
    customer.innerText = userData[userIndex].name
       
    }








export{
customer,
userID,
getRandom,
loadNewUser,
}
