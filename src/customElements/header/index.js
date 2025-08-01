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


// Create a class for the element
class CustomHeader extends HTMLElement {
  // static hasAnimated = false;
  constructor() {
    super();
    this.testClass = "";
    this.instanceId = Math.random().toString(36);
    this.attachShadow({ mode: "open" });
  };

  // Render Method
  render() {
    // Dom Element Creation
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          height: auto;
          width: 100%;
          box-sizing: border-box;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          // position: fixed;
          z-index: 2;
          top: 0;
          flex-direction: column;
        }

        .header-col {
          gap: 20px;
          display: flex;
        }

        .header-content {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          padding-top: 12px;
        }

        .date-content {
          // opacity: 0;
          padding: 4px 0;
        }

        .icon {
          // opacity: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo {
          font-family: var(--default-font);
          padding: 10px;
          border: 1px solid var(--site-text-color);
          display: inline-flex;
          max-width: 90px;
          width: auto;
          font-size: 14px;
          float: left;
          top: 136px;
        }
        
        .logo a {
          text-decoration: none;
          color: var(--site-text-color);
        }

        p {
          font-family: var(--default-font);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 400;
          margin-top: 0;
          margin-bottom: 0;
          strong {
            font-family: var(--default-font-bold);
          }
        }
        
        @media (min-width: 780px) {
         .logo {
            position: relative;
            top: auto;
            transition: var(--transition);
            font-size: 16px;
          }
          .logo:hover {
            box-shadow: -5px 6px 0px 0px var(--hover-shadow);
          }

          .header {
            align-items: center;
            flex-direction: row;
            position: fixed;
          }

          .header-content {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            padding-top: 0;
          }
        }
      </style>

      <header class="header">
        <div class="header-col">
          <div>
            <h1 class="logo"><a href="/">Dallas Gale Creative.</a></h1>
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
        <custom-nav></custom-nav>
      </header>
    `;
  };

  connectedCallback() {
    console.log("Custom element added to page.");
    const wasReloaded = performance.getEntriesByType("navigation")[0].type === "reload";

    if (wasReloaded) {
      sessionStorage.removeItem("component-animated");
    }

    // DOM Stuff
    this.render();

    const hasAnimated = sessionStorage.getItem("component-animated") === "true";
   
    // Date Logic
    const body = document.querySelector("body");
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
      body.classList.add(diurnalPeriods(hour));

      // DOM Modification
      dateElement.textContent = `It's ${parseDay(day)} ${dayOfMonth}${daySuffix(dayOfMonth)} ${formatMonth(month)}, ${year}`;
      iconElement.innerHTML = displayIcon(daySegments);
      welcomeMSG.textContent = daySegments;
      timeElement.textContent
        = `${formatHour(hour)}:${formatMin(mins)} ${meridiemIndicator(hour)}`;
    }

    function setDate() {
      dateData();
      setInterval(() => {
        dateData();
      }, 1000);
    }

    setDate();

    setTimeout(() => {
      if (!hasAnimated) {
        sessionStorage.setItem("component-animated", "true");
      }
    }, 1000);
  };

  // disconnectedCallback() {
  //   console.log("Custom element removed from page.");
  // }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  // adoptedCallback() {
  //   console.log("Custom element moved to new page.");
  // }

  // attributeChangedCallback(name) {
  //   console.log(`Attribute ${name} has changed.`);
  // }

}

customElements.define("custom-header", CustomHeader);
