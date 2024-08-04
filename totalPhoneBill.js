// functions/totalPhoneBill.js
export function totalPhoneBill(callsAndSms) {
    let total = 0;
    callsAndSms.split(',').forEach(item => {
      if (item.trim() === 'call') total += 2.75;
      if (item.trim() === 'sms') total += 0.65;
    });
    return 'R' + total.toFixed(2);
  }
  