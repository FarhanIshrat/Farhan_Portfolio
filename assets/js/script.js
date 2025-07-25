let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ( ) => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetText = document.getElementById(targetId);

      if (targetText.style.display === "none" || targetText.style.display === "") {
        targetText.style.display = "block";
        button.innerText = "Read Less";
      } else {
        targetText.style.display = "none";
        button.innerText = "Read More";
      }
    });
  });


ScrollReveal ({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Laravel Developer','WordPress Developer', 'Creative Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

 const form = document.querySelector("form");
  const successMsg = document.getElementById("success-message");
  const submitBtn = form.querySelector(".btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get email field and validate it
    const email = form.querySelector('input[name="email"]').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // Disable button
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        showMessage("Message sent successfully!", "success");
        form.reset();
      } else {
        showMessage("Something went wrong. Please try again.", "error");
        submitBtn.disabled = false;
        submitBtn.value = "Send Message";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      showMessage("Network error. Please try again.", "error");
      submitBtn.disabled = false;
      submitBtn.value = "Send Message";
    });
  });

  function showMessage(message, type) {
    successMsg.textContent = message;
    successMsg.className = type;
    successMsg.style.display = "block";

    setTimeout(() => {
      successMsg.style.display = "none";
      successMsg.className = "";
      if (type === "success") {
        submitBtn.disabled = true;
        submitBtn.value = "Sent ";
      }
    }, 4000);
  }
