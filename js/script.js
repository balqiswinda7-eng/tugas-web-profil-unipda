// Interaksi portfolio: animasi scroll, link navbar aktif, menu mobile

document.addEventListener('DOMContentLoaded', () => {

  // Mengisi tahun berjalan secara dinamis pada footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // LANGKAH 1: Menyeleksi semua elemen yang memiliki class 'scroll-reveal'
  // Catatan: Elemen-elemen ini berada di section About, Projek, dan Kontak.
  // Bagian Skills & Technology sengaja TIDAK disertakan karena wajib statis.
  const revealElements = document.querySelectorAll('.scroll-reveal');

  // LANGKAH 2: Menentukan opsi konfigurasi Intersection Observer
  const observerOptions = {
    root: null,          // Menggunakan viewport jendela browser sebagai area acuan
    rootMargin: '0px 0px -50px 0px', // Memicu animasi sedikit sebelum elemen benar-benar menyentuh batas bawah
    threshold: 0.15      // Memicu ketika setidaknya 15% bagian elemen sudah terlihat di layar
  };

  // LANGKAH 3: Membuat instance IntersectionObserver
  // Fungsi callback ini akan dijalankan secara otomatis saat posisi scroll pengguna melintasi threshold
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Memeriksa apakah elemen sedang berpotongan/masuk ke dalam viewport layar
      if (entry.isIntersecting) {
        // Menambahkan class 'is-visible' untuk memicu transisi CSS (opacity 1 dan translateY 0)
        entry.target.classList.add('is-visible');

        // LANGKAH 4: Hentikan pengamatan (unobserve) pada elemen yang sudah tampil
        // Hal ini memastikan transisi animasi berjalan mulus dan menghemat pemakaian memori CPU browser
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // LANGKAH 5: Mendaftarkan setiap elemen target ke dalam observer
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ======================================================================
  // TAMBAHAN: LINK AKTIF DAN MENU MOBILE
  // ======================================================================

  // LINK NAVBAR AKTIF: tandai link sesuai section yang sedang terlihat
  const semuaSection = document.querySelectorAll('main section[id]');
  const semuaLinkNav = document.querySelectorAll('.navbar-glass .nav-link');
  const pengamatSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        semuaLinkNav.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  semuaSection.forEach(section => pengamatSection.observe(section));

  // MENU MOBILE: tutup otomatis setelah salah satu link diklik
  const menuNav = document.getElementById('navbarPortfolioNav');
  semuaLinkNav.forEach(link => {
    link.addEventListener('click', () => {
      if (menuNav.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(menuNav).hide();
      }
    });
  });

  // LINK PLACEHOLDER (href="#"): cegah loncat ke atas sampai diisi URL asli
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });

});
