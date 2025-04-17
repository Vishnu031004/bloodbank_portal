// Show/hide forms
function showSignUp() {
    document.getElementById("sign-up-form").style.display = "block";
    document.getElementById("sign-in-form").style.display = "none";
  }
  
  function showSignIn() {
    document.getElementById("sign-up-form").style.display = "none";
    document.getElementById("sign-in-form").style.display = "block";
  }
  
  // Signup handler
  function handleSignUp(e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    const user = { name, email, password };
    localStorage.setItem("bloodbank-user", JSON.stringify(user));
    alert("Sign up successful! Please sign in now.");
    showSignIn();
  }
  
  // Signin handler
  function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
  
    const savedUser = JSON.parse(localStorage.getItem("bloodbank-user"));
  
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      document.getElementById("auth-section").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  // Dashboard features
  function searchBloodBank() {
    const area = document.getElementById("area").value;
    const bloodGroup = document.getElementById("blood-group").value;
    alert(`Searching for blood bank in ${area} with blood group ${bloodGroup}`);
  }
  
  function sendBloodRequest() {
    const name = document.getElementById("request-name").value;
    const mobile = document.getElementById("request-mobile").value;
    const group = document.getElementById("request-blood-group").value;
    alert(`Blood request sent!\nName: ${name}\nMobile: ${mobile}\nGroup: ${group}`);
  }
  
  function registerDonor() {
    const name = document.getElementById("donor-name").value;
    const group = document.getElementById("donor-blood-group").value;
    const mobile = document.getElementById("donor-mobile").value;
    alert(`Donor Registered!\nName: ${name}\nMobile: ${mobile}\nGroup: ${group}`);
  }
  