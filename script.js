document.addEventListener("DOMContentLoaded", () => {
  const yearButtons = document.querySelectorAll(".year-tabs button");

  yearButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Hapus kelas 'active' dari semua tombol
      yearButtons.forEach(btn => btn.classList.remove("active"));

      // Tambahkan kelas 'active' ke tombol yang diklik
      button.classList.add("active");

      // Simulasi: tampilkan alert atau ubah data kontribusi
      const selectedYear = button.textContent;
      alert(`Menampilkan kontribusi untuk tahun ${selectedYear}`);
      
      // Di sini kamu bisa tambahkan logika untuk mengganti isi .grid
    });
  });
});