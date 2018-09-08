let restaurant = {
    name: 'Johnny Rockets',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (seatCount) {
        this.guestCount = this.guestCount + seatCount
    },
    removeParty: function (seatCount) {
        this.guestCount = this.guestCount -  seatCount
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))