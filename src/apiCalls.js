


const fetchApi = type => {
    return fetch(`http://localhost:3001/api/v1/${type}`)
        .then(response => response.json())
        .catch(err => console.log(err))
}

const savePromises = () => Promise.all([fetchApi('customers'),fetchApi('rooms'),fetchApi('bookings')])


const postApi = (userID,date,roomNumber) => {
    fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify({userID: userID, date: date, roomNumber: roomNumber}),
        headers: {'Content-Type': 'application/json'}
    })
   .then(response => response.json())
   .then(json => console.log(json.message))
   .catch(err => alert('server down'))
}
    


export {
    savePromises,
    postApi
}