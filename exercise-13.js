function xo(str) {
  var x = 0;
  var o = 0;

  for (var i = str.length -1; i >= 0; i--) {
    if (str[i] === 'x') {
      x += 1;
    } else {
      o += 1;
    }
  }
  if (x === o) {
    return true
  } else {
    return false
  }
}


console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
