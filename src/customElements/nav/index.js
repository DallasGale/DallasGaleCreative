import githubIcon from "./github.js";
import linkedinIcon from "./linkedin.js";

// Create a class for the element
class CustomNav extends HTMLElement {
  constructor() {
    super();
    // Create shadow root
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    // Dom Element Creation
    this.shadowRoot.innerHTML = `
      <style>
        .nav {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          padding-bottom: 30px;
          margin-bottom: 30px;
          border-bottom: 1px solid var(--site-text-color);;
          gap: 20px;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          svg, g {
            fill: var(--svg-icon-fill);
          }
        }

        .link {
          color: var(--site-text-color);
          font-size: var(--nav-font-size);
          font-family: var(--default-font-bold);
          display: inline;
        }

        @media (min-width: 780px) { 
          .nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding-bottom: 30px;
            margin-bottom: 40px;
          }
        }
      </style>

      <nav class="nav">
        <div>
          <a class="link" href="mailto:hello@dallasgale.com">
            hello[at]dallasgale.com
          </a>
        </div>
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

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("custom-nav", CustomNav);
