
const filterBookingsByUser = (customer,rooms,bookings) => {
  console.log(customer)
  if (customer === "") {
    return "USER NOT FOUND"
  }
  let usersBookings = bookings.filter(booking => {
      
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
  if (!customer.id || customer === '') {
    return "CUSTOMER NOT FOUND"
  }
    return rooms.reduce((acc,room) => {
      bookings.forEach(booking => {
      
      if (customer.id === booking.userID && booking.roomNumber === room.number){
    
            acc += room.costPerNight
        }
      })
      return acc
    },0).toFixed(2)
}


const filterRoomsByType = (date,type,rooms,bookings) => {

let allUnavailableRooms = bookings.reduce((acc,booking) => {
  if(booking.date === date) {
    acc.push(booking.roomNumber)
  }
  return acc
},[])

let allAvailableRooms = rooms.filter(room => !allUnavailableRooms.includes(room.number) && room.roomType === type)
if(!allAvailableRooms.length){
  return "NO ROOMS AVAILABLE"
}
return allAvailableRooms

}


export {
    filterBookingsByUser,
    calculateTotalCostOfUsersBookings,
    filterRoomsByType
}