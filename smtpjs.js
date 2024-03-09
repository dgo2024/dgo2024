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

  const head = 'Hello,<br><br><br>';
  const footer = `
  <br><br><br>Best regards<br><br>
  dg.o2024`;
  let data = ' <table>';
  data += '  <tr>';
  data += '   <td><strong>Name of applicant</strong></td>';
  data += '   <td>' + name_of_applicant + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Institution</strong></td>';
  data += '   <td>' + institution + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Phone Number</strong></td>';
  data += '   <td>' + phone_number + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Address</strong></td>';
  data += '   <td>' + address + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>E-mail</strong></td>';
  data += '   <td>' + email + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Personal Website</strong></td>';
  data += '   <td>' + personal_website + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Title of Paper Accepted</strong></td>';
  data += '   <td>' + title_of_paper_accepted + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Abstract of Paper Accepted</strong></td>';
  data += '   <td>' + abstract_of_paper_accepted + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Departure Date</strong></td>';
  data += '   <td>' + departure_date + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Return Date</strong></td>';
  data += '   <td>' + return_date + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Expected expense</strong></td>';
  data += '   <td>' + expected_expense + '</td>';
  data += '  </tr>';

  data += '  <tr>';
  data += '   <td><strong>Why are you applying for this travel grant</strong></td>';
  data += '   <td>' + why_travel_grant + '</td>';
  data += '  </tr>';
  data += ' </table>';

  const replyInfo = `
  Hello ${name_of_applicant},<br><br><br>
  We have received your application.
  <br><br>
  ${data}
  `;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'dgo2024.ntu@gmail.com',
    Password: '677813FEAE22572C88CC71BB0B2990576EA2',
    To: 'phauser@albany.edu',
    From: 'dgo2024.ntu@gmail.com',
    Subject: 'dg.o2024 - Application of travel grants from ' + name_of_applicant,
    Body: head + data + footer,
  }).then((message) => {
    if (message === 'OK') {
      alert('Your application has been send successfully!');
      init();
      btn.value = 'Send';
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'dgo2024.ntu@gmail.com',
        Password: '677813FEAE22572C88CC71BB0B2990576EA2',
        To: email,
        From: 'dgo2024.ntu@gmail.com',
        Subject: 'dg.o2024 - ' + name_of_applicant + ', your application has been accepted',
        Body: replyInfo + footer,
      });
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
