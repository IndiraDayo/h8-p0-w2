//Tugas 1

console.log('LOOPING PERTAMA')

var i = 0;
while (i < 10) {
  i++;
  var num = i * 2;
  console.log(num + ' - I love coding');
}
console.log('LOOPING KEDUA');

var j = 10;
while (j > 0) {
  var num = j * 2;
  console.log(num + ' - I will become fullstack developer')
  j--;
}


// Tugas 2


console.log('LOOPING PERTAMA')

for (var i = 1; i < 10; i++) {
  var num = i * 2;
  console.log(num + ' - I love coding');
}

console.log('LOOPING KEDUA');

for (var j = 10; j > 0; j--) {
  var num = j * 2;
  console.log(num + ' - I will become fullstack developer')
}

//Tugas 3

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + ' GENAP');
  } else {
    console.log(i + ' GANJIL');
  }
}

for (var i = 1; i < 10; i += 2) {
  if (i % 3 === 0) {
    console.log(i + ' kelipatan ' + i);
  } else {
    console.log('" "');
  }
}
