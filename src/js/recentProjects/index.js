/* eslint-disable @stylistic/arrow-parens */
import projects from "../../json/recent-projects.json";

const domEl = document.querySelector("#recent-work");

function renderParagraphs(paragraphs) {
  return paragraphs
    .map((paragraph) => `<p class="paragraph">${paragraph.text}</p>`)
    .join("");
}

function renderLinks(links) {
  return links
    .map((link) => {
      return `
              <div key="${link.label}" class="project-link">
                <a target="_blank" class="link box-link" href="${link.url}">${link.label}</a>
                ${link.archived ? "<div class='project-archive-icon'><img src='icons/archive.svg' height='20px'>archived</div>" : ""}
              </div>
            `;
    })
    .join("");
}

const RecentProjects = () => {
  let showDetails = true;

  if (projects) {
    let html = projects
      .map((project) => {
        const {
          summary,
          employer,
          id,
          logo,
          meta: { date, jobType },
          thumbnail,
          paragraphs,
          links,
          press,
        } = project;

        return `
    <div class="recent-work-project" key="${id}">
      <div class="employer-lockup">
        <img class="logo" src="${logo.path}" alt="${employer.name} logo" class="recent-work-logo" />
        <h3 class="employer"><a target="_blank" href="${employer.url}">${employer.name}</a></h3>
      </div>
      <div class="content">
        <div class="meta">
          <small class="date">${date} // ${jobType}</small>
        </div>
        <div class="thumbnail-group">
          <picture class="recent-work-hero-thumbnail">
            <img src="${thumbnail.path}" alt="Screenshot of Linde Material Handling website on macbook and mobile devices" />
          </picture>
        </div>
        <h4 class="introduction">${summary}</h4>

       

      
       ${showDetails ? renderParagraphs(paragraphs) : []}

        <div class="recent-work-link-group">
          ${renderLinks(links)}
        </div>
         <p>
          <div class="recent-work-link-group">
          ${press
            .map((link) => {
              return `
            <div key="${link.label}" class="project-link">
            <div class='project-archive-icon'><img src='icons/article.svg' height='20px'></div>
              <a target="_blank" class="link press-link" href="${link.url}">${link.label}</a>

            </div>
           `;
            })
            .join("")}
          </div>
        </p>
      </div>
    </div>`;
      })
      .join("");

    if (domEl) {
      console.log("el exists");
      // map over projects and render the columns

      domEl.insertAdjacentHTML("afterBegin", html);
    }
  }
};

export default RecentProjects;
