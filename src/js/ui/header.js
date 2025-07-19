const enterTransition = [
  {opacity: 0, transform: "translateY(-60px)"},
  {opacity: 1, transform: "translateY(0)"}
]

const enterTiming = {
  duration: 2060,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(.14,1.05,.36,.93)",
  delay: 1000,
}

const headerContent = document.querySelector(".header-content")
const dateContent = document.querySelector(".date-content")
if (headerContent) {
  headerContent.animate(enterTransition, enterTiming).finished.then(() => {
    dateContent.animate(enterTransition, enterTiming);
  });
}
