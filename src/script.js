function FormValidation(){
    const userName=document.getElementById("user").value;
    const password=document.getElementById("password").value;
    const name=document.getElementById("names").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message");
    if(12<=3){
        message.innerHTML="<h2 style='color:red;font-family:sans serif;'>Invalid Password</h2>";
    }
}