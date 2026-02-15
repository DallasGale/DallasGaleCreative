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

const cssUrl = new URL("./styles.css", import.meta.url).href;

class CustomHeader extends HTMLElement {
  scrolledHeader = false;
  // static hasAnimated = false;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Render Method
  render() {
    // Dom Element Creation
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssUrl}">
      <header class="header">
        <div class="header-col">
          <div>
            <div class="logo"><a href="/">Dallas Gale.</a></div>
          </div>
          <div class="header-content">
            <div style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
              <p>
                Good <span id="header-welcome-msg"></span>!
              </p>
              <div id="header-icon" class="icon"></div>
            </div>
            <p class="date-content">
              <span class="u-capitalize text-color-grey-01" id="header-date"></span>
              <span id="header-time" class="text-color-grey-01"></span>
            </p>
          </div>
        </div>
      </header>
    `;
  }

  // Header scrolled state
  listenForScroll() {
    const header = this.shadowRoot.querySelector(".header");
    // const introAvatar = document.querySelector("#intro-avatar");
    const introBlurb = document.querySelector("#intro-blurb");
    const logo = this.shadowRoot.querySelector(".logo");

    window.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => {
        const isPastThreshold = window.scrollY > 100;
        header.classList.toggle("scrolled", isPastThreshold);
        logo.classList.toggle("scrolled", isPastThreshold);
        // introAvatar.classList.toggle("hide-intro", isPastThreshold);
        introBlurb.classList.toggle("hide-intro", isPastThreshold);
      });
    });
  }

  connectedCallback() {
    this.render();
    this.listenForScroll();
    // const body = document.querySelector("body");

    // Date Logic
    const welcomeMSG = this.shadowRoot.querySelector("#header-welcome-msg");
    const timeElement = this.shadowRoot.querySelector("#header-time");
    const dateElement = this.shadowRoot.querySelector("#header-date");
    const iconElement = this.shadowRoot.querySelector("#header-icon");

    function dateData() {
      const date = new Date();
      const day = date.getDay();
      const hour = date.getHours();
      const daySegments = diurnalPeriods(hour);
      const month = date.getMonth();
      const dayOfMonth = date.getDate();
      const mins = date.getMinutes();
      const year = date.getFullYear();

      // Theme Mode
      // body.classList.add(diurnalPeriods(hour));

      // DOM Modification
      dateElement.textContent = `It's ${parseDay(day)} ${dayOfMonth}${daySuffix(dayOfMonth)} ${formatMonth(month)}, ${year}`;
      iconElement.innerHTML = displayIcon(daySegments);
      welcomeMSG.textContent = daySegments;
      timeElement.textContent = `${formatHour(hour)}:${formatMin(mins)} ${meridiemIndicator(hour)}`;
    }

    function setDate() {
      dateData();
      setInterval(() => {
        dateData();
      }, 1000);
    }

    setDate();
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }
}

customElements.define("custom-header", CustomHeader);
