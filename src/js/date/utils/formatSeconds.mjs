function formatSeconds(seconds) {
  if (seconds < 10) return `0${seconds}`;
  return seconds;
}
export default formatSeconds;
