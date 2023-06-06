import chai from 'chai';
const expect = chai.expect;
import { filterBookingsByUser,calculateTotalCostOfUsersBookings ,filterRoomsByDate,filterRoomsByType} from '../src/bookings';
import { customerTestData, bookingTestData, roomTestData } from '../src/data/test-data.js'

describe('filterBookingsByUser', function() {
  it('should be a funnction', function() {
    expect(filterBookingsByUser).to.be.a('function');
  });
  it('should return rooms that only the current user have booked',function() {
    const result = filterBookingsByUser({"id":1,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
    expect(result).to.deep.equal([{ date: '2021/09/23', roomType: 'junior suite', cost: 397.02 }])
  })
  it('should return error message if user has 0 bookings',function() {
    const result = filterBookingsByUser({"id":20,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
    expect(result).to.deep.equal("YOU HAVE 0 BOOKINGS")
  })
  it('should return an error message if there is no user is given', function() {
    const result = filterBookingsByUser("",roomTestData,bookingTestData)
    expect(result).to.deep.equal("USER NOT FOUND")
  })
});

describe('calculateTotalCostOfUserBookings', function() {
    it('should be a funnction', function() {
      expect(filterBookingsByUser).to.be.a('function');
    });
    it('should return rooms that only the current user have booked',function() {
      const result = calculateTotalCostOfUsersBookings({"id":1,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
      expect(result).to.deep.equal(397.02)
    })
    it('should return error message if customer is invalid',function() {
      const result = calculateTotalCostOfUsersBookings({"id":null,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
      expect(result).to.deep.equal("CUSTOMER NOT FOUND")
    })
  });

  describe('filterRoomsByDate', function() {
    it('should be a function', function() {
      expect(filterRoomsByDate).to.be.a('function');
    });
    it('should return rooms that are available on given date',function() {
      const result = filterRoomsByDate("2021/11/23",roomTestData,bookingTestData)
      expect(result).to.deep.equal([
        {
          number: 1,
          roomType: 'residential suite',
          bidet: true,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 358.4
        },
        {
          number: 2,
          roomType: 'suite',
          bidet: false,
          bedSize: 'full',
          numBeds: 2,
          costPerNight: 477.38
        },
        {
          number: 3,
          roomType: 'single room',
          bidet: false,
          bedSize: 'king',
          numBeds: 1,
          costPerNight: 491.14
        },
        {
          number: 4,
          roomType: 'single room',
          bidet: false,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 429.44
        },
        {
          number: 5,
          roomType: 'single room',
          bidet: true,
          bedSize: 'queen',
          numBeds: 2,
          costPerNight: 340.17
        },
        {
          number: 6,
          roomType: 'junior suite',
          bidet: true,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 397.02
        },
        {
          number: 7,
          roomType: 'single room',
          bidet: false,
          bedSize: 'queen',
          numBeds: 2,
          costPerNight: 231.46
        },
        {
          number: 10,
          roomType: 'suite',
          bidet: false,
          bedSize: 'twin',
          numBeds: 1,
          costPerNight: 497.64
        },
        {
          number: 11,
          roomType: 'single room',
          bidet: true,
          bedSize: 'twin',
          numBeds: 2,
          costPerNight: 207.24
        }
      ])
    });
    it('should return error message if date input is absent', function() {
        const result = filterRoomsByDate("",roomTestData,bookingTestData)
        expect(result).to.equal('INVALID DATE')
    });
    it('should return error message if date input is not valid', function() {
      const result = filterRoomsByDate("20/10",roomTestData,bookingTestData)
      expect(result).to.equal('INVALID DATE')
  });
  });
  
  describe('filterRoomsByType', function() {
    it('should be a function', function() {
      expect(filterRoomsByType).to.be.a('function');
    });
    it('should return rooms that only the current user have booked',function() {
      const result = filterRoomsByType("2022/02/10","residential suite",roomTestData,bookingTestData)
      expect(result).to.deep.equal([
        {
          number: 1,
          roomType: 'residential suite',
          bidet: true,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 358.4
        }
      ])
    });
    it('should return error message if room type is unavailable', function() {
        const result = filterRoomsByType("2022/02/10","king room",roomTestData,bookingTestData)
        expect(result).to.equal('NO ROOMS AVAILABLE')
    });
    it('should return error message if room type is not selected', function() {
      const result = filterRoomsByType("2022/02/10","",roomTestData,bookingTestData)
      expect(result).to.equal('NO ROOMS AVAILABLE')
  });
  });
 