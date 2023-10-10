
window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const query = window.location.search;
	const url = new URLSearchParams(query);
	var usernameRegister = url.get("username");
	var passwordRegister = url.get("password");
	//ดึงข้อมูลที่กรอกมา ได้จาก url

	var usernameLogin = document.forms["myLogin"]["username"].value;
	var passwordlogin = document.forms["myLogin"]["password"].value;
	//กรอกข้อมูลที่โชว์ที่หน้าล็อคอิน

	//เช็คข้อมูลว่าตรงกันไหม
	if (usernameLogin == usernameRegister && passwordlogin == passwordRegister) {
		alert("Login success.");
	}
	else{
		alert("Information is incorrect.");
		return false;
	}

}

			