document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const popup = document.getElementById("formResult");
  
    if (!form || !popup) {
      console.error("Form atau popup tidak ditemukan!");
      return;
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Validasi kosong
      if (!name || !email || !phone || !message) {
        showPopup("❌ Semua kolom wajib diisi!", true);
        return;
      }
  
      // Validasi email
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        showPopup("❌ Invalid email format!", true);
        return;
      }
  
      // Validasi nomor telepon
      if (!/^\d{10,13}$/.test(phone)) {
        showPopup("❌ Phone number must be 10–13 digits!", true);
        return;
      }
  
      // Berhasil
      showPopup(`✅ Thank you, ${name}! Your message has been sent.`);
  
      form.reset();
    });
  
    // Fungsi popup
    function showPopup(message, isError = false) {
      popup.textContent = message;
      popup.classList.remove("error", "success");
      popup.classList.add(isError ? "error" : "success");
      popup.style.display = "block";
  
      setTimeout(() => {
        popup.style.display = "none";
      }, 4000);
    }
  });

  window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

  