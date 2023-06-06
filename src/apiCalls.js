


const fetchApi = type => {
    return fetch(`http://localhost:3001/api/v1/${type}`)
        .then(response => response.json())
        .catch(err => console.log(err))
}

const savePromises = () => Promise.all([fetchApi('customers'),fetchApi('rooms'),fetchApi('bookings')])


export {
    savePromises
}