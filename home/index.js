let clock_div = document.getElementById("clock");
let date_div = document.getElementById("date");

const week = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

setInterval(() => {
  const fullDate = new Date();
  const time = fullDate.toLocaleTimeString("en-US", { hour12: false });
  const date = fullDate.toLocaleDateString();
  let day = week[fullDate.getDay()];
  clock_div.innerText = time;
  date_div.innerText = `${date} - ${day}`;
}, 1000);
