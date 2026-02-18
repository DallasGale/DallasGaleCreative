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
    window.requestAnimationFrame(() => {
      const isPastThreshold = window.scrollY > 100;
      recentWorkHeadingSection.classList.toggle("scrolled", isPastThreshold);
      header.classList.toggle("scrolled", isPastThreshold);
      logo.classList.toggle("scrolled", isPastThreshold);
      introBlurb.classList.toggle("hide-intro", isPastThreshold);

      // Recent Work Heading
      const recentWorkHeadingTop =
        recentWorkHeadingSection.getBoundingClientRect().top;

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
