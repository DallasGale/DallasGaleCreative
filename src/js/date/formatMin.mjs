function formatMin(min) {
  if (min >= 10 && min <= 59) return min
  else {
    switch (min) {
      case 0:
        return "00";
      case 1:
        return "01";
      case 2:
        return "02";
      case 3:
        return "03";
      case 4:
        return "04";
      case 5:
        return "05";
      case 6:
        return "06";
      case 7:
        return "07";
      case 8:
        return "08";
      case 9:
        return "09";
      default:
        return "invalid min";
    }
  }
}

export default formatMin;
