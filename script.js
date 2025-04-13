// سكربت بسيط - يمكن إضافة وظائف لاحقًا
console.log("مرحباً بك في موقع نظارات الذهب");
<script>
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        document.getElementById("form-message").style.display = "block";
      } else {
        alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
      }
    });
  });
</script>
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

// Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 5000);
// سلايدر آراء الزبائن
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) {
      t.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

// أول واحد يظهر
showTestimonial(current);
