const available = document.querySelector(".available");

//the text at the end will change depending on the hour of the day in Caracas
let isWorkingHours = (int) => {
  return int >= 9 && int <= 17;
};
let userDate = new Date();
let caracasTime = new Date(
  userDate.toLocaleString("en-US", { timeZone: "America/Caracas" })
);
available.textContent = isWorkingHours(caracasTime.getHours())
  ? "🟢  I'm probably online right now."
  : "🟠  I'm probably offline right now.";
