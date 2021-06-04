const available = document.querySelector('.available')

//the text at the end will change depending on the hour of the day in Colombia

if (available) {
  let isWorkingHours = (int) => {
    return int >= 9 && int <= 17
  }
  let userDate = new Date()
  let myTime = new Date(
    userDate.toLocaleString('en-US', { timeZone: 'America/Bogota' }),
  )
  available.textContent = isWorkingHours(myTime.getHours())
    ? "🟢  I'm probably online right now."
    : "🟠  I'm probably offline right now."
}
