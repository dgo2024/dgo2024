const btn = document.getElementById('dgo-travel-grant-submit');

document.getElementById('dgo-travel-grant-form').addEventListener('submit', function (event) {
  event.preventDefault();
  btn.value = 'Sending...';
  const email = document.getElementById('dgs-email').value;
  const nationality = document.getElementById('dgs-nationality').value;
  const passportNo = document.getElementById('dgs-passport-no').value;
  const surname = document.getElementById('dgs-surname').value;
  const givenName = document.getElementById('dgs-given-name').value;
  const birthday = document.getElementById('dgs-birthday').value;
  const passportExpiryDate = document.getElementById('dgs-passport_expiry_date').value;
  const sex = document.getElementById('dgs-sex').value;
  
  let params = {
    email:email,
    nationality: nationality,
    passportNo: passportNo,
    surname: surname,
    givenName: givenName,
    birthday: birthday,
    passportExpiryDate: passportExpiryDate,
    sex: sex,
  };

  emailjs.send('service_7vqe4qw', 'template_66edcgq', params, 'KKm4P8w8DHdRHvnXv').then(
    () => {
      btn.value = 'Send Email';
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    },
  );
});
