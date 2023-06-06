let customerTestData = 
[
{"id":1,"name":"Leatha Ullrich"},
{"id":2,"name":"Rocio Schuster"},
{"id":3,"name":"Kelvin Schiller"},
{"id":4,"name":"Kennedi Emard"},
{"id":5,"name":"Rhiannon Little"}
];

let bookingTestData =
[
{"id":"5fwrgu4i7k55hl6sz","userID":5,"date":"2022/04/22","roomNumber":1},
{"id":"5fwrgu4i7k55hl7ar","userID":4,"date":"2022/02/10","roomNumber":2},
{"id":"5fwrgu4i7k55hl83r","userID":5,"date":"2022/01/09","roomNumber":3},
{"id":"5fwrgu4i7k55hl844","userID":6,"date":"2022/02/14","roomNumber":4},
{"id":"5fwrgu4i7k55hl84z","userID":3,"date":"2022/02/18","roomNumber":5},
{"id":"5fwrgu4i7k55hl8ea","userID":1,"date":"2021/09/23","roomNumber":6},
{"id":"5fwrgu4i7k55hl8eb","userID":2,"date":"2021/10/23","roomNumber":7},
{"id":"5fwrgu4i7k55hl8ec","userID":3,"date":"2021/11/23","roomNumber":8},
{"id":"5fwrgu4i7k55hl8ef","userID":3,"date":"2021/11/23","roomNumber":9},
{"id":"5fwr2346h7k5hl8eb","userID":2,"date":"2021/10/1","roomNumber":10},
{"id":"5fwrgu41hf6js8wm3","userID":3,"date":"2021/11/9","roomNumber":11}
];




let roomTestData = [
{"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
{"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
{"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
{"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44},
{"number":5,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":2,"costPerNight":340.17},
{"number":6,"roomType":"junior suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":397.02},
{"number":7,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":2,"costPerNight":231.46},
{"number":8,"roomType":"junior suite","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":261.26},
{"number":9,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":200.39},
{"number":10,"roomType":"suite","bidet":false,"bedSize":"twin","numBeds":1,"costPerNight":497.64},
{"number":11,"roomType":"single room","bidet":true,"bedSize":"twin","numBeds":2,"costPerNight":207.24}
];

export {
    customerTestData,
    bookingTestData,
    roomTestData
}