function timeConversion(s) {
  const amPm = s.slice(-2);
  const hourArray = s.replace(/(AM|PM)/, '').split(':');

  if (amPm === 'AM' && hourArray[0] === '12') {
    hourArray[0] = '00';
  } else if (amPm === 'PM' && hourArray[0] !== '12') {
    hourArray[0] = (parseInt(hourArray[0]) + 12).toString();
  }

  console.log(hourArray.join(':'));
}

timeConversion('12:05:45AM');
