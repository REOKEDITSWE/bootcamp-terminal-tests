// This function calculates transport fee based on the time of the day
export function transportFee(hour) {
    if (hour >= 6 && hour < 9) {
      return 'R20';
    } else if (hour >= 9 && hour < 18) {
      return 'R15';
    } else {
      return 'R10';
    }
  }
  