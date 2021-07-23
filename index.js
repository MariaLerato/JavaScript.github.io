//creating a function that receive argument
//declaration

    let  name = String;
        age = Number;
        gender = String;

function showDetails(name,age,gender){
    name = prompt("Enter your name:","");
    age = prompt("Enter your age:","");
    gender =prompt("Enter your gender","");
    
    answer = "";
    if (age >= 18){
        answer = "you are above 18,"
    }else
    answer = "you are below 18,"
        
    console.log("Hi" +" "  + name + " " +(gender.substring(0,1)) + " " + answer);

}
showDetails(age , name);
alert("Arrays start here");



//arrays

    let fulldetails = [
       _name = prompt("Enter Name","" , ""),
       surname = prompt("Enter Surname:",""),
        gender = prompt("Enter Gender", ""),
        age = prompt("Enter Your Age","")];
       
    
    let _det = [
        "Name" , "Surname" , "Gender" , "Age"
    ];
 

    let deco = _det.join(" | ");
    for( i = 0 ; i < 5 ; i++ ){
        _det.push (i); 
     }
    let _details =fulldetails.join(" | ");
    let _heading = "Heading";
      
    for( i = 0 ; i < 5 ; i++ ){
        fulldetails.push (i); 
     }
    console.log(_heading);
    console.log(_det[i] + deco);
    console.log(" " + fulldetails[i] + _details);
    
    alert("Arrow Functions");

    //arrow functions
 let sum = (num1 , num2 , num3) => num1 + num2 + num3;
 num1 = prompt("Enter number:");
 num2 = prompt("Enter your second number");
 num3 = prompt("Enter your third number");
 console.log(sum(num1, num2, num3));