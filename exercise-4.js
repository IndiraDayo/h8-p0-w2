var tanggal = 30;
var bulan = 2;
var tahun = 2000;
var namaBulan = '';

if(tahun < 1900 || tahun > 2200){
  console.log('Year out of range')
}else {    
  if (tanggal >= 1 || tanggal <= 31){
  
    switch(bulan) {
    case 1: 
      namaBulan = 'January';
      break;
    case 2: 
      if (tanggal > 29 ){
        console.log('Date invalid');
      } else {
        namaBulan = 'Februari';
      }
      break;
    case 3: 
      namaBulan = 'Maret';
      break;
    case 4:
      if (tanggal > 30 ){
        console.log('Date invalid');
      } else {
        namaBulan = 'April';
      }
      break;
    case 5: 
      namaBulan = 'Mei';
      break;
    case 6: 
      if (tanggal > 30 ){
        console.log('Date invalid');
      } else {
        namaBulan = 'Juni';
      }
      break;
    case 7: 
      namaBulan = 'Juli';
      break;
    case 8: 
      namaBulan = 'Agustus';
      break;
    case 9: 
      if (tanggal > 30 ){
        console.log('Date invalid');
      } else {
        namaBulan = 'September';
      }
      break;
    case 10: 
      namaBulan = 'Oktober';
      break;
    case 11: 
      if (tanggal > 30 ){
        console.log('Date invalid');
      } else {
        namaBulan = 'November';
      }
      break;
    case 12: 
      namaBulan = 'December';  
      break;
    }
    
  console.log(tanggal + ' ' + namaBulan + ' ' + tahun) 
    
  } else {
    console.log('Date invalid')
  } 
} 