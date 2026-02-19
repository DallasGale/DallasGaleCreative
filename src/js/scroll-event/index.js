/* eslint-disable @stylistic/operator-linebreak */
const header = document.querySelector(".header");
const recentWorkHeadingSection = document.querySelector("#recent-work-heading");
const recentWorkHeading = document.querySelector(
  "#recent-work-heading .section-title",
);
const introBlurb = document.querySelector("#intro-blurb");
const logo = document.querySelector(".logo");

const ScrollEvent = () => {
  return window.addEventListener("scroll", () => {
    // Recent Work Heading
    const recentWorkHeadingTop =
      recentWorkHeadingSection.getBoundingClientRect().top;
    window.requestAnimationFrame(() => {
      const isPastThreshold = window.scrollY > 100;
      const footer = document.querySelector(".footer");

      recentWorkHeadingSection.classList.toggle("scrolled", isPastThreshold);
      header.classList.toggle("scrolled", isPastThreshold);
      logo.classList.toggle("scrolled", isPastThreshold);
      introBlurb.classList.toggle("hide-intro", isPastThreshold);
      footer.classList.toggle("scrolled", isPastThreshold);

      recentWorkHeading.classList.toggle(
        "underline",
        recentWorkHeadingTop >= 35,
      );
      recentWorkHeading.classList.toggle(
        "highlight",
        recentWorkHeadingTop <= 35,
      );
    });
  });
};

export default ScrollEvent;
