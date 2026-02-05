import afternoonIcon from "../icons/afternoon.mjs";
import eveningIcon from "../icons/evening.mjs";
import morningIcon from "../icons/morning.mjs";

/**
 * Returns the appropriate icon based on the hour of day
 * @param {"morning" | "afternoon" | "evening"} daySegments - Hour in 24-hour format (0-23)
 * @returns {string} SVG icon string for the time period
 */
function displayIcon(daySegments) {
  switch (daySegments) {
    case "morning":
      return morningIcon;
    case "afternoon":
      return afternoonIcon;
    case "evening":
      return eveningIcon;
    default:
      return afternoonIcon;
  }
}

export default displayIcon;
