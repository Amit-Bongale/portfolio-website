
submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log("Submitted");

  Email.send({
      SecureToken : "687467b3-96ae-4beb-8bcb-3295a3e4735d",
      To : 'amitbongale14@gmail.com', 
      From : "webmailsender14@gmail.com",
      Subject : "NEW Contact form Enquiry",
      Body : "Name:"+document.getElementById("name").value
      + "<br> Email:"+document.getElementById("email").value
      + "<br> Mobile Number: "+document.getElementById("mobile-no").value
      + "<br> Description; "+document.getElementById("dispcription").value
  }).then(
    message => alert("Thank you for contacting, we will reach you out soon")
  );
});