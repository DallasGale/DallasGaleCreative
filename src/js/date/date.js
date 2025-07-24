import afternoonIcon from "../icons/afternoon.js";
import daySuffix from "./daySuffix.mjs";
import eveningIcon from "../icons/evening.js";
import formatHour from "./formatHour.mjs";
import formatSeconds from "./formatSeconds.mjs";
import formatMonth from "./formatMonth.mjs";
import formatMin from "./formatMin.mjs";
import meridiemIndicator from "./meridiemIndicator.mjs";
import morningIcon from "../icons/morning.js";
import parseDay from "./parseDay.mjs";
import diurnalPeriods from "./diurnalPeriods.mjs";

// DOM Elements
const body = document.querySelector("body");
const welcomeMSG = document.querySelector("#header-welcome-msg");
const timeElement = document.querySelector("#header-time");
const dateElement = document.querySelector("#header-date");
const iconElement = document.querySelector("#header-icon")
 
// Icon Animation
const iconTransition = [
  { opacity: 0 },
  { opacity: 1 },
]

const iconTiming = {
  delay: 2000,
  duration: 10000,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in-out",
}

iconElement.animate(iconTransition, iconTiming)


function displayIcon(daySegments) {
  if (daySegments === "morning") {
    return morningIcon
  } else if (daySegments === "afternoon") {
    return afternoonIcon
  } else return eveningIcon
}

function diurnalThemeMode(hour) {
  console.log({body, hour})
  if (diurnalPeriods(hour) === "morning") {
    body.classList.add("morning")
  } else if (diurnalPeriods(hour) === "afternoon") {
    body.classList.add("afternoon")
  } else {
    body.classList.add("evening")
  }
}

function dateData() {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const daySegments = diurnalPeriods(hour)
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const mins = date.getMinutes();
  // const secs = date.getSeconds();
  const year = date.getFullYear();
  

  // Theme Mode
  diurnalThemeMode(hour)

  // DOM Modification
  dateElement.textContent = `It's ${parseDay(day)} ${dayOfMonth}${daySuffix(dayOfMonth)} ${formatMonth(month)}, ${year}`;
  iconElement.innerHTML = displayIcon(daySegments);
  welcomeMSG.textContent = daySegments
  timeElement.textContent = 
    `${formatHour(hour)}:${formatMin(mins)} ${meridiemIndicator(hour)}`;
}

function setDate() {
  dateData();
  setInterval(() => {
    dateData();
  }, 1000);
}

setDate();
