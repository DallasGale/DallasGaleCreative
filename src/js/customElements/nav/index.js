import githubIcon from "./icons/github.js";
import linkedinIcon from "./icons/linkedin.js";

const cssUrl = new URL("./styles.css", import.meta.url).href;

// Create a class for the element
export class CustomNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    // Dom Element Creation
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssUrl}">
      <nav class="nav"> 
        <div>
          <a class="link nav-icon" href="https://github.com/dallasgale" 
            id="github" style="width: 24px; height: 24px;" 
            onclick="gtag('event', 'click', {
              event_category: 'outbound',
              event_label: 'GITHUB_link'
            });">
            GitHub
          </a>
        </div>
        <div>
          <a class="link nav-icon" href="https://www.linkedin.com/in/dallas-gale/" 
            id="linkedin" style="width: 24px; height: 24px;" 
            onclick="gtag('event', 'click', {
              event_category: 'outbound',
              event_label: 'LINKEDIN_link'
            });">
            LinkedIn
          </a>
        </div>
      </nav>
    `;

    const github = this.shadowRoot.querySelector("#github");
    github.innerHTML = githubIcon;
    const linkedin = this.shadowRoot.querySelector("#linkedin");
    linkedin.innerHTML = linkedinIcon;
  }

  // disconnectedCallback() {
  //   console.log("Custom element removed from page.");
  // }

  // connectedMoveCallback() {
  //   console.log("Custom element moved with moveBefore()");
  // }

  // adoptedCallback() {
  //   console.log("Custom element moved to new page.");
  // }

  // attributeChangedCallback(name) {
  //   console.log(`Attribute ${name} has changed.`);
  // }
}

customElements.define("custom-nav", CustomNav);
