import afternoonIcon from "../../images/afternoon.js";
import daySuffix from "./daySuffix.mjs";
import eveningIcon from "../../images/evening.js";
import formatHour from "./formatHour.mjs";
import formatSeconds from "./formatSeconds.mjs";
import meridiemIndicator from "./meridiemIndicator.mjs";
import morningIcon from "../../images/morning.js";
import parseDay from "./parseDay.mjs";
import diurnalPeriods from "./diurnalPeriods.mjs";

// DOM Elements
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

function dateData() {
  const date = new Date();
  const day = date.getDay();
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  const daySegments = diurnalPeriods(hour)

  // DOM Modification
  welcomeMSG.textContent = daySegments
  iconElement.innerHTML = displayIcon(daySegments);
  dateElement.textContent = `It's ${parseDay(day)} ${dayOfMonth}${daySuffix(dayOfMonth)}, ${year}`;
  timeElement.textContent = 
    `${formatHour(hour)}:${mins}:${formatSeconds(secs)}${meridiemIndicator(hour)}`;
}

function setDate() {
  dateData();
  setInterval(() => {
    dateData();
  }, 1000);
}

setDate();
