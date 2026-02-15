const cssUrl = new URL("./styles.css", import.meta.url).href;

export class CustomFooter extends HTMLElement {
  scrolledFooter = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Render Method
  render() {
    // Dom Element Creation
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="${cssUrl}">
      <footer class="footer">
        <custom-nav></custom-nav>

      <div class="ctas">
        <a href="./src/downloads/CV_Folio.pdf" class="cta">Download Folio</a>
        <a href="mailto:hello@dallasgale.com" class="cta" onclick="gtag('event', 'click', {
              event_category: 'outbound',
              event_label: 'CONTACT_ME_link'
            });">Contact Me</a>
      </div>
      </footer>
    `;
  }

  // footer scrolled state
  listenForScroll() {
    const footer = this.shadowRoot.querySelector(".footer");
    window.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => {
        const isPastThreshold = window.scrollY > 100;
        footer.classList.toggle("scrolled", isPastThreshold);
      });
    });
  }

  connectedCallback() {
    console.log("Custom element added to page.");

    this.render();
    this.listenForScroll();
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }
}

customElements.define("custom-footer", CustomFooter);
