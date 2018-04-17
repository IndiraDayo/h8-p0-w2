function konversiMenit(menit) {

  var hour = 0;
  var remainder = 0;
  var zero = 0;

  if (menit > 60) {
    hour = Math.round(menit / 60);
    remainder = menit % 60;

  } else {
    hour = 0;
    remainder = menit;
  }
  if (remainder < 10 ) {
    return hour + ':0' + remainder
  } else {
    return hour + ':' + remainder
  }


}

console.log(konversiMenit(65));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
