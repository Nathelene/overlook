import chai from 'chai';
const expect = chai.expect;
import { filterBookingsByUser,calculateTotalCostOfUsersBookings,filterRoomsByType} from '../src/bookings';
import { bookingTestData, roomTestData } from '../src/data/test-data.js'

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
    const result = filterBookingsByUser('',roomTestData,bookingTestData)
    expect(result).to.deep.equal("USER NOT FOUND")
  })
  it('should return an error message if user id is not provided', function() {
    const result = filterBookingsByUser({"id":null,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
    expect(result).to.deep.equal("USER NOT FOUND")
  })
  it('should return an error message if user is passed in as string', function() {
    const result = filterBookingsByUser("Leatha Ullrich",roomTestData,bookingTestData)
    expect(result).to.deep.equal("USER NOT FOUND")
  })
  it('should return an error message if a user is passed in as a number', function() {
    const result = filterBookingsByUser( 8 ,roomTestData,bookingTestData)
    expect(result).to.deep.equal("USER NOT FOUND")
  })
});

describe('calculateTotalCostOfUserBookings', function() {
    it('should be a funnction', function() {
      expect(filterBookingsByUser).to.be.a('function');
    });
    it('should return rooms that only the current user have booked',function() {
      const result = calculateTotalCostOfUsersBookings({"id":1,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
      expect(result).to.deep.equal("397.02")
    })
    it('should return error message if customer is invalid',function() {
      const result = calculateTotalCostOfUsersBookings({"id":null,"name":"Leatha Ullrich"},roomTestData,bookingTestData)
      expect(result).to.deep.equal("CUSTOMER NOT FOUND")
    })
    it('should return error message if customer is not provided',function() {
      const result = calculateTotalCostOfUsersBookings('',roomTestData,bookingTestData)
      expect(result).to.deep.equal("CUSTOMER NOT FOUND")
    })
    it('should return error message if customer passed in only as name',function() {
      const result = calculateTotalCostOfUsersBookings('Leatha Ullrich',roomTestData,bookingTestData)
      expect(result).to.deep.equal("CUSTOMER NOT FOUND")
    })
    it('should return error message if customer passed in as a number',function() {
      const result = calculateTotalCostOfUsersBookings(8,roomTestData,bookingTestData)
      expect(result).to.deep.equal("CUSTOMER NOT FOUND")
    })
  });


  describe('filterRoomsByType', function() {
    it('should be a function', function() {
      expect(filterRoomsByType).to.be.a('function');
    });
    it('should return rooms that match the users conditions',function() {
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
    it('should return error message if date is not selected', function() {
      const result = filterRoomsByType("","king room",roomTestData,bookingTestData)
      expect(result).to.equal('NO ROOMS AVAILABLE')
    });
    });
 