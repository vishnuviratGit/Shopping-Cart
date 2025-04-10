// Write your script here
let currUser = JSON.parse(localStorage.getItem("currUser"));
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let saveInfo = document.getElementById("saveInfo");
let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let btnPassword = document.getElementById("changePassword");
let logoutBtn = document.getElementById("logout");
let msg1 = document.getElementById("success1");
let msg2 = document.getElementById("success2");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
msg1.style.color = "green";
msg2.style.color = "green";
error1.style.color = "red";
error2.style.color = "red";

if (currUser) {
  //save info functionality
  saveInfo.addEventListener("click", () => {
    msg1.textContent = "";
    error1.textContent = "";
    if (!fname.value || !lname.value) {
      error1.textContent = "Please fill the required fields";
    } else {
      let users = JSON.parse(localStorage.getItem("users"));
      users.forEach((user) => {
        if (user.email === currUser.email) {
          user.fname = fname.value;
          user.lname = lname.value;
        }
      });
      localStorage.setItem("users", JSON.stringify(users));
      msg1.textContent = "Updated details successfully";
    }
  });

  //password functionality
  btnPassword.addEventListener("click", () => {
    msg2.textContent = "";
    error2.textContent = "";
    let password = "";
    let users = JSON.parse(localStorage.getItem("users"));
    users.forEach((user) => {
      if (user.email === currUser.email) {
         password = user.password;
         
      }
    });
    if (!oldPassword.value || !newPassword.value || !confirmPassword.value) {
      error2.textContent = "Please enter the required fields";
    } else if (password !== oldPassword.value) {
      error2.textContent = "Old Password is Incorrect";
    }
    else if(newPassword.value!==confirmPassword.value){
          error2.textContent="Passwords are not Matching";
    }
    else{
        let users2=JSON.parse(localStorage.getItem("users"));
        users2.forEach(user=>{
             if(user.email===currUser.email){
                  user.password=newPassword.value;
             }
        })
        localStorage.setItem("users", JSON.stringify(users2));
        msg2.textContent="Password updated Successfully";
    }
  });

  //logout
  logoutBtn.addEventListener("click", ()=>{
      localStorage.removeItem("currUser");
      window.location.href="/welcome/index.html";
  })
} else {
  //redirect to login page
    window.location.href="/login/login.html";
}
