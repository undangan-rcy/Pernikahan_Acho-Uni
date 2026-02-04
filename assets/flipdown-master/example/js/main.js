document.addEventListener('DOMContentLoaded', () => {

  // Angka ini adalah 10 Februari 2026 jam 10:00 WIT
  var targetWaktu = 1739149200;

  // Inisialisasi FlipDown
  var flipdown = new FlipDown(targetWaktu, {
    theme: "dark",
    headings: ["Hari", "Jam", "Menit", "Detik"]
  })
    .start(); // Ini perintah untuk menyalakan mesinnya

  // Menampilkan nomor versi (opsional)
  var ver = document.getElementById('ver');
  if (ver) {
    ver.innerHTML = flipdown.version;
  }
});