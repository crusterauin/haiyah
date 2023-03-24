var sapaDuluGaSi = prompt("Hai! Kamu siapa?");
var konfirmasi = confirm("afh iyh?");

if (sapaDuluGaSi.includes("Fatur") && konfirmasi === true) {
  alert("Halo, Bos!");
} else if (sapaDuluGaSi.includes("Shinobu") && konfirmasi === true) {
  alert("Halo, Sayangku!");
} else if (konfirmasi === true) {
  alert("Halo, " + sapaDuluGaSi + "!");
} else {
  while (konfirmasi === false) {
    alert("PENYUSUP!!!");
  }
}

function berhasil() {
  var sukses =
    "Data gagal terkirim karena Fatur belum belajar backend akwokaowkawokwo!";
  alert(sukses);
}
