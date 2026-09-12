// ===== MENU MOBILE =====
// Fungsi: membuka dan menutup menu navigasi di layar HP
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  // Ganti ikon ☰ menjadi ✕ dan sebaliknya
  menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

// Tutup menu saat salah satu link diklik (di HP)
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});

// ===== EFEK HEADER SAAT SCROLL =====
// Fungsi: menambah bayangan pada header saat halaman digulir ke bawah
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.06)';
  }
});

// ===== FORM PESANAN VIA WHATSAPP =====
// Fungsi: mengirim isi form langsung ke WhatsApp percetakan
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Mencegah halaman refresh

  // Ambil data dari form
  const nama = contactForm.nama.value;
  const nomor = contactForm.nomor.value;
  const pesan = contactForm.pesan.value;

  // Susun pesan WhatsApp
  const teksPesan = `Halo Percetakan William, saya ingin memesan:%0A%0A`
    + `Nama: ${nama}%0A`
    + `Nomor WhatsApp: ${nomor}%0A`
    + `Pesanan: ${pesan}%0A%0A`
    + `Mohon info harga dan estimasi waktu pengerjaan. Terima kasih!`;

  // Ganti nomor di bawah dengan nomor WhatsApp Anda (format: 62 + nomor tanpa 0 di depan)
  const nomorWhatsApp = '6281234567890';

  // Buka WhatsApp dengan pesan yang sudah disusun
  window.open(`https://wa.me/${nomorWhatsApp}?text=${teksPesan}`, '_blank');
});