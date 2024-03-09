document.getElementById('dgo-travel-grant-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const btn = document.getElementById('dgo-travel-grant-submit');
  btn.disabled = true;
  btn.value = 'Sending...';
  const name_of_applicant = document.getElementById('name-of-applicant').value;
  const institution = document.getElementById('institution').value;
  const address = document.getElementById('address').value;
  const phone_number = document.getElementById('phone-number').value;
  const email = document.getElementById('email').value;
  const personal_website = document.getElementById('website').value;
  const title_of_paper_accepted = document.getElementById('paper-title').value;
  const abstract_of_paper_accepted = document.getElementById('paper-abstract').value;
  const departure_date = document.getElementById('departure-date').value;
  const return_date = document.getElementById('return-date').value;
  const expected_expense = document.getElementById('expected-expense').value;
  const why_travel_grant = document.getElementById('why-travel-grant').value;

  
  let body = 'Hello,' + '<br><br><br>'; //%0A是換行 換了三行
  body += ' <table>';
  body += '  <tr>';
  body += '   <td><strong>Name of applicant</strong></td>';
  body += '   <td>' + name_of_applicant + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Institution</strong></td>';
  body += '   <td>' + institution + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Phone Number</strong></td>';
  body += '   <td>' + phone_number + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Address</strong></td>';
  body += '   <td>' + address + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>E-mail</strong></td>';
  body += '   <td>' + email + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Personal Website</strong></td>';
  body += '   <td>' + personal_website + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Title of Paper Accepted</strong></td>';
  body += '   <td>' + title_of_paper_accepted + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Abstract of Paper Accepted</strong></td>';
  body += '   <td>' + abstract_of_paper_accepted + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Departure Date</strong></td>';
  body += '   <td>' + departure_date + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Return Date</strong></td>';
  body += '   <td>' + return_date + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Expected expense</strong></td>';
  body += '   <td>' + expected_expense + '</td>';
  body += '  </tr>';

  body += '  <tr>';
  body += '   <td><strong>Why applying for travel grant</strong></td>';
  body += '   <td>' + why_travel_grant + '</td>';
  body += '  </tr>';
  6


  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'dgo2024.ntu@gmail.com',
    Password: '677813FEAE22572C88CC71BB0B2990576EA2',
    To: 'phauser@albany.edu',
    From: 'dgo2024.ntu@gmail.com',
    Subject: 'dg.o2024 - Appliying for travel grant from' + name_of_applicant,
    Body: body,
  }).then((message) => {
    if (message === 'OK') {
      alert('Your application has been send successfully!');
      init();
      btn.value = 'Send';
    } else {
      btn.value = 'Send';
      alert('Some error has occurred! Please try again');
    }
  });
});
function init() {
  document.getElementById('name-of-applicant').value = '';
  document.getElementById('institution').value = '';
  document.getElementById('address').value = '';
  document.getElementById('phone-number').value = '';
  document.getElementById('email').value = '';
  document.getElementById('website').value = '';
  document.getElementById('paper-title').value = '';
  document.getElementById('paper-abstract').value = '';
  document.getElementById('departure-date').value = '';
  document.getElementById('return-date').value = '';
  document.getElementById('expected-expense').value = '';
  document.getElementById('why-travel-grant').value = '';
}
