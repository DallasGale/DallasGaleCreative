import formatSeconds from "./formatSeconds.mjs";
import meridiemIndicator from "./meridiemIndicator.mjs";
import parseDay from "./parseDay.mjs";
import partOfDay from "./partOfDay.mjs";
import daySuffix from "./daySuffix.mjs";
import morningIcon from "../../images/morning.js";
import afternoonIcon from "../../images/afternoon.js";
import eveningIcon from "../../images/evening.js";

// DOM Elements
const welcomeMSG = document.querySelector("#header-welcome-msg");
const timeElement = document.querySelector("#header-time");
const dateElement = document.querySelector("#header-date");
const iconElement = document.querySelector("#header-icon")
 
const iconTransition = [
  { transform: "translateY(0) translateX(0)" },
  { transform: "translateY(-2px)" },
  { transform: "translateY(2px) translateX(-4px)" },
  { transform: "translateY(0) translateX(0)" },
]

const iconTiming = {
  duration: 10000,
  iterations: Infinity,
  fill: "forwards",
  easing: "ease-in-out",

}

iconElement.animate(iconTransition, iconTiming)


function displayIcon(potd) {
  if (potd === "morning") {
    return morningIcon
  } else if (potd === "afternoon") {
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

  const potd = partOfDay(hour)

 
  // DOM Modification
  welcomeMSG.textContent = potd
  iconElement.innerHTML = displayIcon();
  dateElement.textContent = `${parseDay(day)} ${dayOfMonth}${daySuffix(dayOfMonth)} ${year}`;
  timeElement.textContent = 
    `${hour}:${mins}:${formatSeconds(secs)}${meridiemIndicator(hour)}`;
}

function setDate() {
  dateData();
  setInterval(() => {
    dateData();
  }, 1000);
}

setDate();
