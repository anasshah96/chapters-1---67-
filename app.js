// -------- Chapter # 01: ALERTS--------

// Task # 01 --------
// alert("Hello world !")


// Task # 02 --------
// alert("Error! please enter a valid password")


// Task # 03 --------
// alert("Welcome to JS Land...\nHappy coding!")


// Task # 04 --------
// alert("Welcome to JS Land...")
// alert("Happy coding!")


// Task # 05 --------
// alert("Hello... I can run JS through my browser's console")


// Task # 06 --------
// Make use of alerts in your new/existing HTML & CSS project.


// Task # 07 --------
// Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 02: VARIABLES FOR STRINGS --------

// Task # 01 --------
// var  username = ""


// Task # 02 --------
// var myName = "Jhone Doe"


// Task # 03 --------
//--a
// var message;
//--b
// message= "Hello World"
//--c
// alert(message)


// Task # 04 --------
// var student_name = "Jhone Doe"
// var age = "15 years old"
// var course = "Certified Mobile Dovelopment"
// alert(student_name)
// alert(age)
// alert(course)


// Task # 05 --------
// var a = "PIZZA"
//    alert( a.slice(0,a.length) + "\n" + a.slice(0,a.length-1) + "\n" +  a.slice(0,a.length-2) + "\n" + a.slice(0,a.length-3) + "\n" + a.slice(0,a.length-4))


// Task # 06 --------
// var email;
// email =  "example@example.com"
// alert("My email address is " + email)


// Task # 07 --------
// var book;
// book = "A smarter way to learn JavaScript"
// alert("I'm trying to learn from the Book " + book)


// Task # 08 --------
// document.write("<h1>Yah! I can wirte HTML content through JavaScript</h1>");


// Task # 09 --------
// var a;
// a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------




// -------- Chapter # 03: VARIABLES FOR NUMBERS --------

// Task # 01 --------
// var age;
// age = 15 
// alert("I'm " + age + " years old" )



// Task # 02 --------
// N = 14
// alert("You have visited this site " +  N +  " times")


// Task # 03 --------
// var  birthYear;
// birthYear = 1990
// document.write( "<h2>My birthday year is " +  birthYear +   "<br> Data type of my declear variable is number </h2>")


// Task # 04 --------
//--a
// var visitor_name = "John Doe"
//--b
// var product_title = "T-shirt"
//--c
// var quantity = 5
// document.write( "<h2>"  + visitor_name + " ordered " + quantity + " " + product_title + "(s) on XYZ Clothing store<h2>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 04: VARIABLE NAMES: LEGAL & ILLEGAL  --------

// Task # 01 --------
// var firstName = 'John', lastName = "Doe", age = 42;

// Task # 02 --------
//--5 legal variables
// $1name,  name1, firstName, _numone, my1stVariable

//--5 illegal variables
// 1name, break, 123, .variable, true or false

// Task # 03 --------
//--a
// document.write("<h1> Rules for naming JS variables <br>  </h1>")

//--b
// document.write( "<p>variable names can only contains, numbers, $ (dollar sign) and _ (underscore). For Example : $my_1stVariable</p>")

//--c
// document.write( "<p>Variable names can only contain , numbers, S and _ . For example : Smy_lstVariable Variable must begin with a letter, $ or _ . For example : $name, _name or name</p>")

//--d
// document.write( "<p> Variable names are case sensitive </p>")

//--e 
// document.write( "<p> Variable names should not be JS keywords</p>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 05: MATH EXPRESSIONS --------

// Task # 01 --------
// var a;
// a = +prompt("Enter first value", "0")
// b = +prompt("Enter second value", "0")
// c = a + b
// document.write("Sum of " + a + " and " + b + " is " + c + "<br>")

// Task # 02 --------
// d = a - b
// document.write("Subtraction of " + a + " and " + b + " is " + d + "<br>")

// e = a * b
// document.write("Multiplication of " + a + " and " + b + " is " + e + "<br>")

// f = a / b
// document.write("Division of " + a + " and " + b + " is " + f + "<br>")

// g = a % b
// document.write("Modulus of " + a + " and " + b + " is " + g + "<br>")


// Task # 03 --------
//--a
// var x;

//--b
// document.write("Value after variable declaration is " + x + "<br>")

//--c
// x = 5;

// --d
// document.write("Initial value: " + x + "<br>")

//--e
// x = ++x

//--f
// document.write("Value after increment is: " + x + "<br>")

//--g
// x = x + 7

//--h
// document.write("Value after addition is: " + x + "<br>")

//--i
// x = --x

//--j
// document.write("Value after decrement is: " + x + "<br>")

//--k
// x = x % 3

//--l
// document.write("The remainder is: " + x + "<br>")


// Task # 04 --------
// ticketPrice = 600
// quantity = 5
// toalcost = ticketPrice * quantity
// document.write("Total cost of " + quantity + " ticket(s) to a movie is " + toalcost + " PKR")


// Task # 05 --------

//document.write("Table of 4 <br>");
//for(var i = 1; i <= 10; i++){
//	document.write("4" + "x" + i + "=" + 4*i + "<br>")}


// Task # 06 --------
// var celsius = 25
// var fahrenheit = 70
// var f = ( fahrenheit - 32 ) * 5 / 9
// var c = ( celsius * 5 / 9) + 32
// document.write("<h1>" + celsius + "&#730;C is " + c + "</h1>")
// document.write("<h1>" + fahrenheit + "&#730;C is " + f + "</h1>")


// Task # 07 --------
// var item1 = 650
// var item2 = 100
// var qItem1 = 3
// var qitem2 = 7
// var shippingCost = 100
// var totalCost = ((item1*qItem1)+(item2*qitem2)+shippingCost)
// document.write("<h1>Shopping Cart</h1>")
// document.write("Price of item 1 is " + item1 + "</br>" + "Quantity of item 1 is " + qItem1 + "</br>" + "Price of item 2 is " + item2 + "</br>" + "Quantity of item 2 is " + qitem2 + "</br>" + "Shipping charges " + shippingCost + "</br> </br>" + "Total cost of your order is "  + totalCost )


// Task # 08 --------
// var totalMarks = 980
// var marksObtained = 804
// percentage = (marksObtained/totalMarks*100)
// document.write("<h1>Marks Sheet </h1>")
// document.write("Total marks: " + totalMarks + "</br>" + "Marks Obtained: " + marksObtained + "</br>" + "Percentage: " + percentage + "%") 


// Task # 09 --------
// var usd = 104.80
// var riyal = 28
// totalAmount = ((10 * usd) +  (25 * riyal))
// document.write("<h1> Currency in PKR </h1> <br>")
// document.write("Total Currency in PKR: " + totalAmount)


// Task # 10 --------
// var num1 = 15
// var calculation = (((15 + 5)*10)/2)


// Task # 11 --------
// var a = new Date();
// var currentYear = a.getFullYear();
// var birthYear = +prompt("Enter your year of birth")
// var ageCal = (currentYear - birthYear)
// document.write("<h1>Age Calculator </h1> <br></br>")
// document.write("Current Year: " + currentYear + "<br>" +  "Birth Year: " + birthYear + "<br>" + "Your Age is: " + ageCal + " years")


// Task # 12 --------
// var radius = 20;
// var piValue = Math.PI
// var circleCircumference = (2*piValue*radius)
// var console.log(circleCircumference)
// var areaCal = (piValue*(radius*radius))
// var area = areaCal.toFixed(1)
// console.log(area)
// document.write("<h1>The Geometrizer</h1> <br></br>")
// document.write("Radius of a circle: " + radius + "<br>" +  "The circumference is: " + circleCircumference + "<br>" + "Your area is: " + area)


// Task # 13 --------
// var favoriteSnack  = prompt("Your favorite snack is")
// var currentAge = +prompt("Enter your age")
// var maxAge = 65
// var perdayAmount = prompt("Enter your estimated amount of snacks per day")
// var tatalForRest = ((maxAge - currentAge)*perdayAmount)
// document.write("<h1>The Lifetime Supply Calculator</h1> <br></br>")
// document.write("Favourite Snack: " + favoriteSnack + "<br>" +  "Current age: " + currentAge + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>"  + "Amount of snacks per day:" + "<br>" + "You will need " + tatalForRest + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 06 - 09: MATH EXPRESSIONS --------

// Task # 01 --------

//var a;
//a = 10
//document.write("Result: <br> The value of a is:" + a + "<br>.............................................<br><br>")

//a = ++a

//document.write("The value of ++a is:" + a + "<br>")
//document.write("Now the value of a is:" + a + "<br><br>")


//a = a++
//document.write("The value of a++ is:" + a + "<br>")

//document.write("Now the value of a is:" + a + "<br><br>")

//a = --a

//document.write("The value of --a is:" + a + "<br>")
//document.write("Now the value of a is:" + a + "<br><br>")

//a = a--
//document.write("The value of a-- is:" + a + "<br>")
//document.write("Now the value of a is:" + a + "<br>")


// Task # 02 --------

//var a = 2, b = 1;
//c = --a;
//document.write("The output of --a is: " + c + "<br>")

//d = --a - --b;
//document.write("The output of --a - --b is: " + d + "<br>")

//e = --a - --b + ++b;
//document.write("The output of --a - --b + ++b is: " + e + "<br>")

//varresult = --a - --b + ++b + b--;
//document.write("The output of --a - --b + ++b + b-- is: " + varresult + "<br> <br>")

//document.write("The result of --a - --b + ++b + b-- is: " + varresult)


// Task # 03 --------

//var a = prompt("Enter your name","name")
//alert("Hello " + a )


// Task # 04 --------
//Not given ----

// Task # 05 --------
//var a = prompt("Enter your value", 5)
//var b = prompt("Enter length", 10)
//document.write("<h2>Table of " + a + "<br></h2>");
//for(var i = 1; i <= b; i++){
//	document.write(a + "x" + i + "=" + a*i + "<br>")}

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 09 - 11: USER INPUT & CONDITIONAL STATEMENT --------

// Task # 01 --------
//x = prompt("Enter your city name")
//if (x == "Karachi" || "karachi" || ""KARACHI){
//	alert("Welcome to city of lights")}


//Task # 02 --------
//x = prompt("Enter your gender")
//if (x == "male"){
//	alert("Good Morning Sir.")}

//if (x == "female"){
//	alert("Good Morning Ma’am.")}

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 12 - 13: IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS --------

//Task # 01 --------




// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 14 - 16: ARRAYS --------

//Task # 01 --------
// arr = [];


// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 17 - 20: ARRAYS AND LOOP --------

//Task # 04 --------
//var a = prompt("Enter your value", 0)
//var b = prompt("Enter length", 0)
//document.write("<h2>Table of " + a + "<br></h2>");
//for(var i = 1; i <= b; i++){
//	document.write(a + "x" + i + "=" + a*i + "<br>")}




// -------- Chapter # 21 - 25: STRING METHODS --------

// Task # 01 --------
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter First Name")
// var fullName = firstName + " " + lastName
// alert("Hello ! " + fullName)


// Task # 02 --------
// var a = prompt("Enter your favorite mobile phone model")
// var n = a.length;
// document.write("<h1>My favorite phone is: " + a + "<br>Length of string: " + n  + "</h1>")


// Task # 03 --------
// var a =  "Pakistani"
// var n = a.indexOf("n")
// document.write("<h1>String: " + a + "<br>Index of 'n': " + n + "</h1>")


// Task # 04 --------
// var a =  "Hello World"
// var n = a.lastIndexOf("l")
// document.write("<h1>String: " + a + "<br>Last index of 'l': " + n + "</h1>")


// Task # 05 --------
// var a =  "Pakistani"
// var b = a.charAt(3)
// document.write("<h1>String: " + a + "<br>Character at index 3: " + b + "</h1>")


// Task # 06 --------
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter First Name")
// var space = (" ")
// var fullName = firstName.concat(space, lastName)
// document.write("<h1>Hello ! " + fullName + "</h1>")


// Task # 07 --------
// var a = "Hyderabad"
// var b = a.replace("Hyder", "Islam")
// document.write("<h1>City: " + a + "<br>After replacement: " + b +  "</h1>")


// Task # 08 --------
// var a = "var message = Ali & Sami are best friends. They play cricket & football together."
// var b = a.replace(/&/g, "and")
// document.write("<h1>" + b + "</h1>")


// Task # 09 --------
// var a = "472"
// var b = (+a)
// document.write("<h1>Value: " + a + "<br>Type: String" +  "<br> Value: "  + b  + "<br>Type: Number</h1>")


// Task # 10 --------
// var a = prompt("Enter your favorite dry fruit name")
// var b = a.toUpperCase();
// document.write("<h1>User input: " + a  + "<br>Upper case: " + b + "</h1>")


// Task # 11 --------
// var a = prompt("Which programming language are you learning nowadays?")
// firstchar =a.slice(0,1)
// firstchar =firstchar.toUpperCase()
// otherchars =a.slice(1)
// otherchars =otherchars.toLowerCase()
// b = (firstchar + otherchars )
// document.write("<h1>User input: " + a  + "<br>Title case: " + b + "</h1>")


// Task # 12 --------
// var num = 35.36;
// var numstr = num.toString();
// var result = numstr.replace(".", "") 
// document.write("<h1>Number: " + num  + "<br>Result: " + result + "</h1>")


// Task # 13 --------

// ==============================================================================


// Task # 14 --------
// a = ["cake", "apple pie", "cookies", "chips", "patties"]
// b = prompt("Welcome to ABC Bakeri. What do you want to order, sir/mam?");
// c = b.toLowerCase();
// d = c.indexOf(c)
// for(i = 0; i <a.length; i++ ){
//     if(a[i] === c){
//         document.write(b + " is <b>available</b> at index " + d + " in our bakery");  
//         break;   
//     }
//     else{
//         document.write("We are sorry. " + b + " is <b> not available</b> " + d + " in our bakery");
//         break;  
//     }
// }


// Task # 15 --------

// ==============================================================================

// Task # 16 --------
// var university = "University of Karachi"
// for (var i = 0; i < university.length; i++) {
//     document.write("<h3>" + university[i] + "<br /></h3>");
//   }


// Task # 17 --------
// var a = prompt("Enter your country name")
// var b = a.slice(-1);
// document.write("<h1>User input: " + a  + "<br>Last character of input: " + b + "</h1>")


// Task # 18 --------
// var a = "The quick brown fox jumps over the lazy dog"
// var b = a.toLowerCase();
// var c = (b.match(/the/g).length);
// document.write("<h1>" + a +  "<br> There are " + c +  " occurrence(s) of word 'the'</h1>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 26 - 30: MATH METHODS --------

// Task # 01 --------
//--a 
// var a = prompt("enter any positive number")
//--b 
// b = Math.round(a)
//--c 
// c = Math.floor(a)
//--d 
// d = Math.ceil(a)
// document.write("<h1>number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d + "</h1>")


// Task # 02 --------
// var num = prompt("enter any number")
//--a 
// a = -Math.abs(num)
//--b 
// b = Math.round(a)
//--c 
// c = Math.floor(a)
//--d 
// d = Math.ceil(a)
// document.write("<h1>number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d + "</h1>")


// Task # 03 --------
// var num1 = -4
// num1abs = Math.abs(num1)
// var num2 = 5
// num2abs = Math.abs(num2)
// document.write("<h1>The absolute value of " + num1 + " is " + num1abs + "<br>The absolute value of " + num2 + " is " + num2abs +"</h1>")


// Task # 04 --------
// var a = Math.floor(Math.random() * 6)  + 1; 
// document.write("<h1>random dice value: " + a + "</h1>")


// Task # 05 --------
// var a = Math.floor(Math.random() * 2)  + 1; 
// if(a === 2){
//     document.write("<h1>" + a + "<br> random coin value: Tails </h1>");
// }
// else{
//     document.write("<h1>" + a + "<br> random coin value: Heads </h1>");
// }


// Task # 06 --------
// var a = Math.floor(Math.random() * 101); 
// document.write("<h1>random number between 1 - 100 is: " + a + "</h1>")


// Task # 07 --------
// var userWeight = prompt("enter weight in kilograms")
// b = userWeight.replace("kilograms" , " ")
// b = userWeight.replace("kgs" , " ")
// document.write("<h1>The weight of user is: " + b +  " kilograms</h1>")


// Task # 08 --------
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var userValue = prompt("Enter a number between 1 - 10")
// if(userValue == randomNumber){
//     alert("Congratulation! \nYou have the correct number")
// }
// else{
//     alert("try again")
// }

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------

// -------- Chapter # 31 - 34: DATE METHODS --------

// Task # 01 --------
// var a = new Date();
// document.write("<h1>" + a + "</h1>")


// Task # 02 --------
// var monthArr = ["January","February","March","April","May","June","July","August", "September","October","November","December"]
// var a = new Date();
// var b = monthArr[a.getMonth()];
// document.write("<h1>Current month: " + b + "</h1>")


// Task # 03 --------
// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var b = dayArr[a.getDay()];
// document.write("<h1>Today is " + b + "</h1>")


// Task # 04 --------
// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var b = dayArr[a.getDay()];
// if(b === "Sat" || "Sun"){
//     document.write("<h1>It's fun day </h1>")
// }


// Task # 05 --------
// var a = new Date();
// var b = a.getDate();
// if(b >= 1 && b <=15){
//         document.write("<h1>First fifteen days of the month</h1>")
// }
// else if(b >= 16 && b <= 31){
//     document.write("<h1> Last days of the month </h1>")
// }


// Task # 06 --------
// var a = new Date()
// var b = a.getTime()
// var c = b/1000*60
// document.write("<h1>Current date: " + a + "<br> Elapsed miliseconds since January 1, 1970: " + b + "<br> Elapsed minutes since January 1, 1970: " + c + "</h1>")


// Task # 07 --------
// var a = new Date();
// var b = a.getHours();
// if(b >= 00 && b <=11){
//         document.write("<h1>Its AM</h1>")
// }
// else if(b >= 12 && b <= 23){
//     document.write("<h1>Its PM</h1>")
// }


// Task # 08 --------
// var a = new Date();
// a.setMonth(11, 31);
// document.write("<h1>" + a + "</h1>")


// Task # 09 --------
// var ramadanstartDate = new Date("June 18, 2015")
// var miliseconds = ramadanstartDate.getTime()
// var today = new Date()
// var todaymili = today.getTime()
// var getdiff = todaymili - miliseconds
// var convertToDays = getdiff/(1000*60*60*24)
// var accurateVal = Math.floor(convertToDays)
// document.write("<h1>" + accurateVal + " days have passed since 1st Ramadan, 2015</h1>")


// Task # 10 --------



// Task # 11 --------
// var currentDate = new Date();
// var a = new Date();
// a.setHours(a.getHours() - 1);
// document.write("Current date: " + currentDate  + "<br> <br> 1 hour ago, it was: " + a )


// Task # 12 --------
// var userInput = prompt("Enter your date of birth","June 18, 1996")
// var userDob = new Date(userInput)
// var a = userDob.getTime()
// var b = new Date()
// var c = b.getTime()
// var getdiff = c - a
// var userYear = userInput.slice(-4);
// var convertToDays = getdiff/(1000*60*60*24*30*12)
// var accurateVal = Math.floor(convertToDays)
// document.write("<h1>Your age is " + accurateVal + "<br>Your birth year is "  +  userYear +"</h1>")


// Task # 13 --------


// Task # 14 --------
// var customerName = "ABC Customer"
// var month = "February"
// var numOfUnit = 410
// var chargPerUnit = 16
// var netAmountDueDate = numOfUnit * chargPerUnit
// var latePaySurcharge = 350
// var grossAmountAfterDueDate = netAmountDueDate + latePaySurcharge
// document.write("<h1>K-Electric Bill</h1>")
// document.write("<p>Customer Name: " + customerName  + "<br>Current Month: " + month   +  "Number of units: " + numOfUnit  + "<br>Charges per unit: " + chargPerUnit  + "<br><br>Net Amount Payable (within Due Date): " + netAmountDueDate  +  "<br>Late Payment Surcharge: " + latePaySurcharge  + "<br>Gross Amount Payable (after Due Date): " + grossAmountAfterDueDate  +  "</p>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 35 - 38: FUNCTION --------

// Task # 01 --------
// function currentDT(){
//     document.write(new Date)
// }
// currentDT()


// Task # 02 --------
// function greet(firstName,lastName){
//     alert("Hello! " + firstName + " " + lastName )
// } 
// greet("Amir","Khan")


// Task # 03 --------
// function sumOfnumbers(fisrtNum, secondNum){
//     fisrtNum = +prompt("Enter first Value")
//     secondNum = +prompt("Enter second Value")
//     alert(fisrtNum + secondNum)
// }
// sumOfnumbers()


// Task # 04 --------
// function calculateVaules(num1,num2,operator){
//     num1 = +prompt("Enter first Value")
//     num2 = +prompt("Enter second Value")
//     operator = prompt("Enter operator")
//     result = num1 + operator + num2
//     alert("Answer is " + eval(result))
// }
// calculateVaules()


// Task # 05 --------
// function squreNum(num){
//     alert(num * num)
// }
// squreNum(5)


// Task # 06 --------
// function factorial(value) {
//     return (value != 1) ? value * factorial(value - 1) : 1;
//   }
//   alert( factorial(8) )

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



















//Task # 05 --------
//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");}

//var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");}

//var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");}
//if (c === 13){
//alert("condition 2 is true");}
//if (++c < 14){
//alert("condition 3 is true");}
//if(c === 14){
//alert("condition 4 is true");}

//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");}

//if (true){
//alert("True");}
//if (false){
//alert("False");}

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 38 - 44: FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  --------

// Task # 01 --------
// function power(a,b){
//     alert(Math.pow(a,b))
// }
// power(3,2)


// Task # 02 --------
// function checkLeapyear(){
//     var year;
//     year = document.getElementById("year").value;
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         document.write(year+" is a leap year"); 
//     }
//     else
//     {
//         document.write(year+" is not a leap year");   
//     }
// }


// Task # 03 --------
// function triangleArea(a,b,c){
//     var a = 0;
//     var b = 0;
//     var c = 0;
//     var s = (a + b + c)/2;
//     var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
//     document.write("<h1>  area of triangle is: " + area + " </h1>")
// }
// triangleArea(29,100,60)


// Task # 04 --------
// function mainFunction(firstStudent, secondStudent, thirdStudent){
//     var firstStudent = a    
//     var secondStudent = b
//     var thirdStudent = c


//     function avgNum(a, b, c){
//         average = (a + b + c)/3
//         document.write("<h1>Average Student Marks is: " + averageNum + "</h1>")
//     }
//     function avgPencentage(a,b,c){
        
//         averagePercentage = (a + b + c)/3*100
//         document.write("<h1>Average Student Marks is: " + averagePercentage + "%</h1>")
//     }
// }


// Task # 05 --------
// indexOf Alternate Function
// function findArr(word){
//     var arr = [ "Orange", "Mango", "Banana",  "Apple"];
//     for(i = 0; i < arr.length; i++){
//         if( word === arr[i]){
//             indexNum = i
//             return alert("Index number of " + word + " is " + indexNum)
//         }
//     }
// }
// findArr("Orange")

// Direct indexOf Function 
// function indexOf(a){
//     var arr = [ "Orange", "Mango", "Banana",  "Apple"];
//     a = arr.indexOf(a)
//     alert(a)
// }
// indexOf("Orange")


// Task # 06 --------
// function removeVowel(sentence) {
//     var vowels = ["a", "e", "i", "o", "u"];
    
//     return sentence.split('').filter(function(sentence) {
//       return vowels.indexOf(sentence.toLowerCase()) == -1;
//     }).join('');
//   }
// alert(removeVowel("Lorem Ipsum is simply dummy text of the printing and typesetting industry."))


// Task # 08 --------
// function distance(kms){
//     metre = kms * 1000
//     feet = kms * 3280.84
//     inch = kms * 39370.1
//     centimetre = kms * 100000
//     document.write(kms + " Kilometres are equals to <br> Metres: "  + metre + "<br> Feets: " + feet + "  <br> Inches: " + inch + "  <br> Centimetres: " + centimetre )
// }
// distance(258)

// function distance(kms){
//     metre = kms * 1000, metre.ceil
//     feet = kms * 3280.84, feet.ceil
//     inch = kms * 39370.1
//     centimetre = kms * 100000
//     coversion = [metre.toFixed(2), feet.toFixed(2), inch.toFixed(2), centimetre.toFixed(2)]

//     document.write("<b> " + kms + " Kilometres are equals to </b> <br> <br> Metres: "  + coversion[0] + "<br> Feets: " + coversion[1] + "  <br> Inches: " + coversion[2] + "  <br> Centimetres: " + coversion[3] )
// }
// distance(258)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 43 - 48: EVENTS  --------

// Task # 01 --------
// function newFunction() {
// alert("Hello world ! ")
// }

// Task # 02 --------
// function popupFunction(){
//   alert("Thanks for puschasing a phone from us")
// }

// Task # 03 --------
// function deleteRow(r) {
//   var i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("table").deleteRow(i);
// }



// Task # 05 --------
// var i = 0
// function countIncrease(){
//   document.getElementById("clickCounter").innerHTML = i++ + 1;
// }
// function countDecrease(){
//   if(i < 0){
//     i = 0
//     stop
//   }
//   document.getElementById("clickCounter").innerHTML = i-- - 1;
// }

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 49 - 52: EVENTS  --------

// Task # 01 --------



// Task # 02 --------
// function readMore() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("moreText");
//   var btnText = document.getElementById("btn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more ..."; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 52 - 57: Modal  --------
// var img = new Array(15);

// for(var i=1;i<=15;i++){ 
// img[i] = new Image(); 
// console.log(i)
// img[i].src = 'modalImges/' + i + '.jpg';
// y = document.getElementById("gallery").innerHTML
// y = setAttribute("value", img)
// }


// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 58 - 67: DOM  --------

// var a = document.getElementById("main-content")
// console.log(a.childNodes)

// var b = document.getElementsByClassName("render")
// console.log(b)
// document.getElementById("write").innerHTML = b

// var c = document.getElementById("first-name")
// c.setAttribute("value","Asim")

// var d = document.getElementById("last-name")
// d.setAttribute("value","Khan")

// var e = document.getElementById("email")
// e.setAttribute("value","asim.khan@abc.com")


// f = document.getElementById("form-content")
// fType = f.nodeType
// console.log(fType)
// document.write("node type of element having id 'form-content' is " + fType)


// g = document.getElementById("last-name")
// gType = g.nodeType
// gChild = g.childNodes
// gcType = gChild.nodeType
// console.log(gType)
// document.write("<br>node type of element having id 'last-name' is " + gType + "and last-name child is " + gcType )


// i = document.getElementById("last-name")
// iNextSibling = i.nextSibling.nodeName
// iPreSibling = i.previousSibling.nodeName
// document.write("Siblings of id lastName <br> Next Sibling " + iNextSibling + "Previous Sibling " + iPreSibling)


// j = document.getElementById("email")
// jType = j.nodeType
// jParent = j.parentNode.nodeName
// document.write("Parent node of id lastName " + jParent + " <br> Type of element " + jType)

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


