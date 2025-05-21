document.addEventListener('DOMContentLoaded', () => {
    const cuteButton = document.getElementById('cuteButton');
    const cuteThing = document.getElementById('cuteThing');
    let isCuteThingVisible = false;

    cuteButton.addEventListener('click', () => {
        if (!isCuteThingVisible) {
            cuteThing.classList.remove('hidden', 'hide');
            cuteThing.classList.add('show');
            isCuteThingVisible = true;
            cuteButton.textContent = "Udah, Jangan Dilihat Terus! 🙈"; // Mengubah teks tombol
        } else {
            cuteThing.classList.remove('show');
            cuteThing.classList.add('hide'); // Tambahkan kelas 'hide' untuk animasi menghilang
            isCuteThingVisible = false;
            cuteButton.textContent = "Klik Ini, Ada Kejutan Lucu!"; // Mengubah teks tombol kembali
        }
    });

    // Opsional: Untuk memastikan animasi typingEffect berjalan setiap kali dimuat
    const messageElement = document.querySelector('.message');
    messageElement.style.width = '0'; // Reset lebar untuk mengulang animasi
    messageElement.style.animation = 'none'; // Hapus animasi sebelumnya
    // Trigger reflow untuk mengulang animasi
    void messageElement.offsetWidth;
    messageElement.style.animation = 'typingEffect 3s steps(60, end) forwards 1.5s, blinkCaret .75s step-end infinite';
});