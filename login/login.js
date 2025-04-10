let email=document.getElementById("email");
let password=document.getElementById("password");
let error=document.getElementById("error");
let success=document.getElementById("success");
error.style.color="red";
success.style.color="green";
function generateToken(){
     return Math.random(0, 100000).toString();
}
document.getElementById("login").addEventListener("click", ()=>{
     if(email.value=="" || password.value==""){
          error.textContent="Please fill all the required fields";
     }
     else{
        let users=JSON.parse(localStorage.getItem("users")??"[]");
        if(users.length>0){
             let user=users.filter((user)=>user.email==email.value);
             if(user.length>0){
               let obj=user[0];
                if(obj.password===password.value){
                    //login
                    localStorage.setItem("currUser", JSON.stringify({
                        email: email.value,
                        password: password.value,
                        token: generateToken()
                    }))
                    window.location.href="/shop/index.html";
                }
                else{
                    error.textContent="Password is incorrect";
                }
             }
             else{
                error.textContent="User does not exist! Please signup";
             }
        }
        else{
            error.textContent="User does not exist! Please signup";
        }
        
     }
})