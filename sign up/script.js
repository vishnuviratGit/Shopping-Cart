// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let password = document.getElementById("password");
let email = document.getElementById("email");
let confirmPassword = document.getElementById("confirmPassword");
let signUp = document.getElementById("signup");
let error = document.getElementById("error");
error.style.color="red";
let success=document.getElementById("success");
success.style.color="green";

signUp.addEventListener("click", (e) => {
  if (
    fname.value == "" ||
    lname.value == "" ||
    password.value == "" ||
    email.value == "" ||
    confirmPassword == ""
  ) {
    error.textContent = "Please enter all the required fields";
  }
  else if(password.value===confirmPassword.value){
       let users=JSON.parse(localStorage.getItem("users")??"[]");
       let filteredUsers=users.filter((user)=>user.email===email.value);
       if(filteredUsers.length>0){
           error.textContent="User already exists! Sign up from another account";
       }
       else{
           users.push({ 
              email: email.value,
              password: password.value,
              fname: fname.value,
              lname:lname.value

           })
           localStorage.setItem("users", JSON.stringify(users));
           error.textContent="";
           fname.value="";
           lname.value="";
           password.value="";
           email.value="";
           confirmPassword.value="";
           success.textContent="Signed Up Successfully";
           window.location.href="/login/login.html";
       }
  }
  else{
     error.textContent="Passwords are not Matching!"
  }
});
