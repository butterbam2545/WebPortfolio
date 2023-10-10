window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var form = document.getElementById("myForm");
    var errormsg = document.getElementById("errormsg");

    //เก็บข้อมูลจากที่กรอกมา เก็บเป็น value
    var password = form.elements["password"].value;
    var Retype_password = form.elements["Retypepassword"].value;


    if (password == Retype_password){
        alert("Register Successful!");
        return true;
    }
    else{
        errormsg.textContent="Password is incorrect.";
        return false;
    }
}