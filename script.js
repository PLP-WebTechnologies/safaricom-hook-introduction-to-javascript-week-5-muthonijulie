//JavaScript Basics
//object
let city={name:"Nairobi",country:"Kenya",continent:"Africa"};
for (let key in city){
    console.log(`${key}:${city[key]}`);//this displays the objects in the terminal
}
//declares and outputs the variables as well as their types
const fname=document.getElementById("fname");//gets element from html using id
const agedisplay=document.getElementById("agedisplay");
const bool=document.getElementById("bool");
fnameVal="Milly";//initialize the variables
ageVal=32;
boolVal=false;
fname.textContent=`Name: ${fnameVal}(Type:${typeof fnameVal})`;//displays both the name and the type
agedisplay.textContent=`Age: ${ageVal}(Type:${typeof ageVal})`;
bool.textContent=`Is married? ${boolVal}(Type:${typeof boolVal})`;

//creating a simple calculator that allows the user to input numbers:
function performCalc(){
    const oper=prompt("Choose an operation (+, -, *, /):")
    validOper=["+","-","*","/"];//identifies the only valid operators
    if (!validOper.includes(oper)) {//condition to check if the operators are valid
        document.getElementById("operation").textContent = `Operation: Invalid operation (${oper})`;
        document.getElementById("res").textContent = "Invalid operation!";
        return;
    }

    document.getElementById("operation").textContent = `Operation: ${oper}`;
//declares the numbers
    const num1=parseFloat(prompt("Enter your first number:"));//allows the user to input the numbers
    document.getElementById("number1").textContent=`First number:${num1}`;//allows the numbers to be displayed on the web browser
    const num2=parseFloat(prompt("Enter your second number:"));
    document.getElementById("number2").textContent=`Second number:${num2}`;
    if(isNaN(num1) || isNaN(num2)){
        document.getElementById("res").textContent="Invalid number! Enter the right numbers";
        return;
    }
    let result;
    //condtion that allows the user to select and perform the operations
    switch(oper){
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "*":
            result=num1*num2;
            break;
        case "/":
            if(num2===0){
                document.getElementById("res").textContent="Division by zero is invalid";
                return;
            }
            result=num1/num2;
            break;
    }
   document.getElementById("res").textContent=`The result is:${result}`;//output after the calculations
}

//function greet()
function greetUser(fname){
    const message=document.getElementById("message");
    message.textContent=`Good morning ${fname}`;
}
greetUser("Muthoni");//calling th function with the parameter

//JavaScript Control Structures
//check eligibility of a person using if condition
function checkEligibility(){

const ageInput=parseInt(prompt("Enter your age"));
document.getElementById("age").textContent=`Age:${ageInput}`;//displays the age on the browser
if(isNaN(ageInput)){//checks if the age is Not a Number and returns message if it is NaN
    document.getElementById("result").textContent="Enter valid age";
    return;

}

if(ageInput>=18){//condition to check if a user is eligible
    document.getElementById("result").textContent="You are eligiblle to vote"
}else{
  document.getElementById("result").textContent="You are not eligible to vote";
}
}

//used to display numbers 1-10
const number=document.getElementById("numbers");

for(let i=0;i<=10;i++){
    const orderList=document.createElement("li");//creates a list inside the ordered list
    orderList.textContent=`Number:${i}`;
    number.appendChild(orderList);//adds the numbers to the list
}

//Introduction to the DOM
//changing HTML structure
const text=document.getElementById("text");
text.textContent="JavaScript in action";//changes the heading 
const dynamicContent=document.getElementById("dynamic-content");
dynamicContent.innerHTML="<p>This content was added dynamically using JavaScript.</p>";//adds a new paragraph to the new div

