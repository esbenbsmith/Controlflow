var securityQuestions = {'question':["What's the name of your cat?","What is you address?","Where were you born?"],expectedAnswer:["Findus","1634 Oxford St","Bloomington"]}

var x=prompt(securityQuestions.question[0])

var keepGoing = true;


while(keepGoing === true) {
if(x===securityQuestions.expectedAnswer[0]) {
	alert("Correct, Next question!");

}
else{
	alert("WRONG!!!")
	break;
}
var y=prompt(securityQuestions.question[1])

if(y===securityQuestions.expectedAnswer[1]) {
	alert("Correct, Next question!");

}
else{
	alert("WRONG!!!")
	break;
}
var z=prompt(securityQuestions.question[2])

if(z===securityQuestions.expectedAnswer[2]) {
	alert("Thanks for participating!");

}
else{
	alert("WRONG!!!")
	break;
}
break;
}