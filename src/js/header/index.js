// Helper Functions
import daySuffix from "./helpers/daySuffix.mjs";
import formatHour from "./helpers/formatHour.mjs";
import formatMonth from "./helpers/formatMonth.mjs";
import formatMin from "./helpers/formatMin.mjs";
import meridiemIndicator from "./helpers/meridiemIndicator.mjs";
import parseDay from "./helpers/parseDay.mjs";
import diurnalPeriods from "./helpers/diurnalPeriods.mjs";

// Utility Functions
import displayIcon from "./utils/displayIcon.mjs";

const Header = () => {
  const welcomeMSG = document.querySelector("#header-welcome-msg");
  const timeElement = document.querySelector("#header-time");
  const dateElement = document.querySelector("#header-date");
  const iconElement = document.querySelector("#header-icon");

  function dateData() {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const daySegments = diurnalPeriods(hour);
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const mins = date.getMinutes();
    const year = date.getFullYear();

    // DOM Modification
    dateElement.textContent = `It's ${parseDay(day)} ${dayOfMonth}${daySuffix(dayOfMonth)} ${formatMonth(month)}, ${year}`;
    iconElement.innerHTML = displayIcon(daySegments);
    welcomeMSG.textContent = `Good ${daySegments}`;
    timeElement.textContent = `${formatHour(hour)}:${formatMin(mins)} ${meridiemIndicator(hour)}`;
  }

  function setDate() {
    dateData();
    setInterval(() => {
      dateData();
    }, 1000);
  }

  setDate();
};

export default Header;
