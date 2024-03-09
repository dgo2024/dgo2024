// function submitHandler() {
const btn = document.getElementById('dgo-travel-grant-submit');
document.getElementById('dgo-travel-grant-form').addEventListener('submit', function (event) {
  event.preventDefault();
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

  let body = '' + '<br><br><br>'; //%0A是換行 換了三行
  body += ' Name of applicant:' + name_of_applicant + '<br>';
  body += ' Institution:' + institution + '<br>';
  body += ' Phone number:' + phone_number + '<br>';
  body += ' Address:' + address + '<br>';
  body += ' E-mail:' + email + '<br>';
  body += ' Personal website:' + personal_website + '<br>';
  body += ' Title of paper accepted:' + title_of_paper_accepted + '<br>';
  body += ' Abstract of paper accepted:' + abstract_of_paper_accepted + '<br>';
  body += ' Departure date:' + departure_date + '<br>';
  body += ' Return date:' + return_date + '<br>';
  body += ' Expected expense:' + expected_expense + '<br>';
  body += ' Why are you applying for this travel grant?<br>' + why_travel_grant + '<br>';

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'dgo2024.ntu@gmail.com',
    Password: '677813FEAE22572C88CC71BB0B2990576EA2',
    To: 'junchoon14@gmail.com',
    From: 'dgo2024.ntu@gmail.com',
    Subject: 'dg.o2024 - Appliying for travel grant from' + name_of_applicant,
    Body: body,
  }).then((message) => alert(message));
  btn.value = 'Send';
});
function init() {
  nameText.value = '';
  institutionText.value = '';
  addressText.value = '';
  bphoneNumber.value = '';
  emailText.value = '';
  websiteText.value = '';
  paperTitleText.value = '';
  paperAbstractText.value = '';
  departureDate.value = '';
  returnDate.value = '';
  expectedExpenseNumber.value = '';
  whyText.value = '';
}
