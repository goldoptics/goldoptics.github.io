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
