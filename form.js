document.getElementById('contactForm').addEventListener('submit', function (e) {
    const email = this.email.value;
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    } else {
      alert("Message sent successfully!");
    }
  });
  