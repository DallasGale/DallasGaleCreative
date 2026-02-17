function meridiemIndicator(hours) {
  if (hours >= 0 && hours < 12) return "am";
  else if (hours >= 12 && hours <= 23) return "pm";
}

export default meridiemIndicator;
