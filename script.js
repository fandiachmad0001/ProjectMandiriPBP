document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");
  const invitation = document.getElementById("invitation");
  const openButton = document.getElementById("openInvitation");
  const backsound = document.getElementById("backsound");

  // Tombol "Buka Undangan" menyembunyikan sampul dan menampilkan isi undangan.
  openButton.addEventListener("click", () => {
    cover.classList.add("d-none");
    invitation.classList.remove("d-none");
    document.body.classList.add("invitation-open");
    backsound.play();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // TANGGAL ACARA:
  const weddingDate = new Date("2026-12-20T08:00:00+07:00").getTime();

  // Elemen angka countdown.
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = Date.now();
    const distance = weddingDate - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
