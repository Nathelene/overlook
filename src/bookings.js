
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

const filterRoomsByDate = (date,rooms,bookings) => {
  if(date === "") {
    return "INVALID DATE"
  }

  return bookings.filter(booking => {
      return booking.date !== date 
    
  }).reduce((acc,booking) => {
    rooms.forEach(room => {
      if(room.number === booking.roomNumber) {
   acc.push(room)
      }
    })

    return acc      
  },[])

}

const filterRoomsByType = (date,type,rooms,bookings) => {

  let availableRooms = bookings.filter(booking => {
    return booking.date !== date 
  
}).reduce((acc,booking) => {

  rooms.forEach(room => {
    if(room.number === booking.roomNumber && room.roomType === type) {
 acc.push(room)
      
    } 
  })
  return acc      
},[])

if (availableRooms.length === 0) {
return "NO ROOMS AVAILABLE"
} 
if (availableRooms.length > 0) {
return availableRooms
}

}

export {
    filterBookingsByUser,
    calculateTotalCostOfUsersBookings,
    filterRoomsByDate,
    filterRoomsByType
}