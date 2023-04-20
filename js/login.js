// step-1: add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // get the email address inside the email input field
   const emailField = document.getElementById('user-email')
   const email = emailField.value;

   const passwordField = document.getElementById('user-password');
   const password = passwordField.value
   if(email === 'sontan@bap.com' && password === "rohan"){
    window.location.href = 'bank.html'
   }
   else {
    alert('tui password vule gesos. toke teijjo sontan kore dilam')
   }
})
