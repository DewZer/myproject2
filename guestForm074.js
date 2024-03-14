// 65130500020 Nathaphat Lertsiriphongphan

const createGuestList = require('./data/guestdata.js')

// import { createGuestList } from './data/guestdata.js'



const guestList = createGuestList()

function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList
  let allGuests = guests.getAllGuests()
  const displayArea = document.getElementById('display-area')
  allGuests.forEach((guest) => {
    newliEle = document.createElement('li')
    newliEle.textContent = `${guest.firstname} ${guest.lastname}`
    displayArea.appendChild(newliEle)
  });

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchInput = document.getElementById('search-input')
    searchInput.addEventListener('keyup', (e) => searchGuest(e.code))
    const addGuestBtn = document.getElementById('add-guest-btn')
    addGuestBtn.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    displayArea.textContent = ''
    const guest = guests.searchGuests(guestItem)
    const liEle = document.createElement('li')
    let newliEle = liEle.textContent(`${guest.firstname} ${guest.lastname}`)
    displayArea.appendChild(newliEle)
    return newliEle
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    displayArea.textContent = ''
      allGuests.forEach((guest) => {
        newliEle = document.createElement('li')
        newliEle.textContent = `${guest.firstname} ${guest.lastname}`
        displayArea.appendChild(newliEle)
      })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) { 
    displayArea.textContent = ''
    let guestList = guests.searchGuests(event)
      guestList.forEach((guest) => {
        newliEle = document.createElement('li')
        newliEle.textContent = `${guest.firstname} ${guest.lastname}`
        displayArea.appendChild(newliEle)
      })
  }

  // 5. Function to add a new guest
  function addGuest() {
    const addFirstnameInput = document.getElementById('firstname-input').value
    const addLastnameInput = document.getElementById('lastname-input').value
    guestList.addNewGuest(addFirstnameInput, addLastnameInput)
   }

  // 6. Function to remove a guest
  function removeGuest(event) {
    guestList.removeGuest(event)
   }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
module.exports = guestForm
// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
