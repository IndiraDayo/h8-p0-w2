var nama = '';
var peran = '';
var count = 0;
var welcome = 'Selamat datang di Dunia Proxytia, ';

nama = prompt('Isi nama di sini:');

if (nama === '' || nama === undefined) {
  console.log('Nama harus diisi!');
} else {
  peran = prompt('Halo ' + nama + ', Pilih peranmu untuk memulai game')
  
  while (peran === '' && count <= 50){
    peran = prompt('Halo ' + nama + ', Pilih peranmu untuk memulai game')
    count++;
  }
  if (peran === 'Ksatria' || peran === 'ksatria'){
    console.log(welcome + name);
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  } else if (peran === 'Tabib' || peran === 'tabib'){
    console.log(welcome + name);
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka')
  } else if (peran === 'Penyihir' || peran === 'penyihir'){
    console.log(welcome + name);
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  } else {
    console.log("Peranmu tidak di temukan.")
  }
  
}
