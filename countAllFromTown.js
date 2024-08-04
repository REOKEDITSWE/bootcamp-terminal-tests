// functions/countAllFromTown.js
export function countAllFromTown(regNumbers, townCode) {
    return regNumbers.split(',').filter(reg => reg.trim().startsWith(townCode)).length;
  }
  