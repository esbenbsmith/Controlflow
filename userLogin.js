var userLogin= {
	'username':'esbenbsmith', 'password':'letmein'
};

var x=prompt("Enter your username"," ")
var y=prompt("Enter your password"," ")

if ((x===userLogin.username)&&(y===userLogin.password)) {
	alert("Correct! Welcome!");
}
else {
	alert("Wrong!");
}