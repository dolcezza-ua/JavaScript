// 1. Convert the code written in 26-33(Part_1) into a function that takes age as input. Example: const checkAge = function(age) { Your transformations }.
// Print to the console the result of the function with ages 17, 18, 61.

let age;
const age_2 = 18; 
const age_3 = 60;
function checkAge(age) {
    if (age < age_2) {
        console.log("You don’t have access cause your age is " + age + " It’s less then ");   
       } else if (age >=  age_2 && age <  age_3) {
           console.log("Welcome  !");
       } else if (age  > age_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log("Technical work");}    
}
checkAge(17);
checkAge(18);
checkAge(61);


// 2. Convert assignment 1 so that the data type is checked first in the function. And if it is not a Number, an error is thrown.

let age2;
const age2_2 = 18; 
const age2_3 = 60;
let number_type = typeof 1;
function checkAge2(age2) {
    let age2_type = typeof age2;
//console.log(age2, age2_type);
    if (age2_type != number_type){
        console.log(age2 + " - not a number !");
    }
        else if(age2 < age2_2) {
        console.log("You don’t have access cause your age is " + age2 + " It’s less then ");   
       } else if (age2 >=  age2_2 && age2 <  age2_3) {
           console.log("Welcome  !");
       } else if (age2  > age2_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log("Technical work");}
       
}
checkAge2(16);
checkAge2(19);
checkAge2(62);
checkAge2("16");
checkAge2("Jasmine");
checkAge2(" ");

// II way:

let age5;
const age5_2 = 18; 
const age5_3 = 60;
function checkAge5(age5) {
let age5_type = Number.isFinite(age5);
//console.log(Number.isFinite(age5));
    if(age5_type && age5 < age5_2) {
        console.log("You don’t have access cause your age is " + age5 + " It’s less then ");   
       } else if (age5_type && age5 >=  age5_2 && age5 <  age5_3) {
           console.log("Welcome  !");
       } else if (age5_type && age5  > age5_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log(age5 + " - not a number !");}
       
}
checkAge5(16);
checkAge5(19);
checkAge5(62);
checkAge5("16");
checkAge5("Jasmine");
checkAge2(" ");


// 3. Convert 2 so that the value '2' (the string containing ONLY NUMBER) is omitted when converted to number.

let age3;
const age3_2 = 18; 
const age3_3 = 60;
let numberType = typeof 1;
function checkAge3(age3) {
    let change_age3 = + age3;
    let change_age3_type = typeof change_age3;
//console.log(age3,typeof age3);
//console.log(change_age3,change_age3_type);
    if (change_age3_type != numberType){
        console.log(age3 + " - not a number !");
    }
        else if(change_age3 < age3_2) {
        console.log("You don’t have access cause your age is " + change_age3 + " It’s less then ");   
       } else if (change_age3 >=  age3_2 && change_age3 <  age3_3) {
           console.log("Welcome  !");
       } else if (change_age3  > age3_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log(age3 + " - not a number !");}
       
}
checkAge3('2');
checkAge3(15);
checkAge3("21");
checkAge3("Jasmine");

// II way:

let age7;
function checkAge7(age7) {
    let change_age7 = + age7;
    let change_age7_type = Number.isFinite(change_age7);
//console.log(age7,change_age7,change_age7_type);
    if(change_age7_type && change_age7 < age3_2) {
        console.log("You don’t have access cause your age is " + change_age7 + " It’s less then ");   
       } else if (change_age7_type && change_age7 >=  age3_2 && change_age7 <  age3_3) {
           console.log("Welcome  !");
       } else if (change_age7_type && change_age7  > age3_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log(age7 + " - not a number !");}
       
}
checkAge7('2');
checkAge7(15);
checkAge7("21");
checkAge7("Jasmine");


// 4. Convert task 3 so that the age is entered using the prompt function in the linked layout.

const age4_2 = 18; 
const age4_3 = 60;
function checkAge4(age4) {
       let age4_type = typeof age4;
    if (age4 == 0) {
        console.log("invalid number entered");
    }
        else if (age4_type != numberType){
        console.log(" It is not a number !");
    }
        else if(age4 < age4_2) {
        console.log("You don’t have access cause your age is " + age4 + " It’s less then ");   
       } else if (age4 >=  age4_2 && age4 <  age4_3) {
           console.log("Welcome  !");
       } else if (age4  > age4_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log(" It is not a number !");}     
}
checkAge4(age4);

// II way:

let age6 = +prompt("Please enter your age");
function checkAge6(age6) {
    let age6_type = Number.isFinite(age6);
    //console.log(age6_type);
    if (age6 == 0) {
        console.log("invalid number entered");
    }  else if(age6_type && age6 < age4_2) {
        console.log("You don’t have access cause your age is " + age6 + " It’s less then ");   
       } else if (age6_type && age6 >=  age4_2 && age6 <  age4_3) {
           console.log("Welcome  !");
       } else if (age6_type && age6  > age4_3) {
           console.log("Keep calm and look Culture channel");
       } else {console.log(" It is not a number !");}     
}
checkAge4(age6);

