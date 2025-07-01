// js/main.js

// Jalankan skrip setelah semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- FITUR 1: THEME SWITCHER (DARK/LIGHT MODE) ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Fungsi untuk menerapkan tema berdasarkan preferensi
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeSwitcher.innerHTML = '🌙'; // Ikon untuk beralih ke mode gelap
        } else {
            body.classList.remove('light-mode');
            themeSwitcher.innerHTML = '☀️'; // Ikon untuk beralih ke mode terang
        }
    };

    // Cek tema yang tersimpan di localStorage saat halaman dimuat
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default ke dark
    applyTheme(savedTheme);

    // Event listener untuk tombol switcher
    themeSwitcher.addEventListener('click', () => {
        let currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Simpan pilihan pengguna
    });


    // --- FITUR 2: "BACK TO TOP" BUTTON ---
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Tampilkan tombol jika pengguna scroll lebih dari 300px ke bawah
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Event listener untuk klik tombol, scroll ke atas dengan halus
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- FITUR 3: SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Gunakan Intersection Observer API untuk performa yang lebih baik
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opsional: berhenti mengamati setelah animasi berjalan sekali
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Animasi berjalan saat 10% elemen terlihat
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
