function sendEmail() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const params = {
      service_id: 'service_noutaiv',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'YOUR_USER_ID',
      attributes: {
        email: email,
        message: message
      }
    };
  
    emailjs.send('YOUR_USER_ID', 'service_noutaiv', 'YOUR_TEMPLATE_ID', params)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('تم إرسال رسالتك بريد إلكتروني بنجاح.');
      }, function(error) {
        console.log('FAILED...', error);
        alert('حدث خطأ عند إرسال رسالتك بريد إلكتروني.');
      });
  }