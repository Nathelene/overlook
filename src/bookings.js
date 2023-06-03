// const filterBookingsByUser = (customer,bookings) => {
//     return bookings.filter(booking => {
//         return booking.userID === customer.id
//     })
// }



const calculateTotalCostOfUsersBookings = (customer,rooms,bookings) => {
    return rooms.reduce((acc,room) => {
        console.log(customer)
      bookings.forEach(booking => {
      
      if (customer.id === booking.userID && booking.roomNumber === room.number){
    
            acc += room.costPerNight
        }
      })
      return acc
    },0)
}


export {
    // filterBookingsByUser,
    calculateTotalCostOfUsersBookings,

}