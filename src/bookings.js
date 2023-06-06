
const filterBookingsByUser = (customer,rooms,bookings) => {
  if (customer === "") {
    return "USER NOT FOUND"
  }
  let usersBookings= bookings.filter(booking => {
      
    return booking.userID === customer.id
  
}).reduce((acc,booking) => {

let obj = {}
  rooms.forEach(room => {
    if(room.number === booking.roomNumber) {
      obj.date = booking.date
      obj.roomType = room.roomType
      obj.cost = room.costPerNight
    }
  })
  acc.push(obj)
  return acc      
},[])
if (usersBookings.length === 0) {
return "YOU HAVE 0 BOOKINGS"
} 
if (usersBookings.length > 0) {
return usersBookings
}
  
}


const calculateTotalCostOfUsersBookings = (customer,rooms,bookings) => {
  if (!customer.id) {
    return "CUSTOMER NOT FOUND"
  }
    return rooms.reduce((acc,room) => {
      bookings.forEach(booking => {
      
      if (customer.id === booking.userID && booking.roomNumber === room.number){
    
            acc += room.costPerNight
        }
      })
      return acc
    },0)
}


export {
    filterBookingsByUser,
    calculateTotalCostOfUsersBookings,

}