simpleGreetProvider = function(){
    return "Hello ";
}

timelyGreetProvider = function(){
    greet="";

    hour = (new Date()).getHours();

    if (hour>=3 && hour<=11) greet="Good Morning ";
    else if(hour<=15) greet="Good Afternoon ";
    else greet="Good Evening ";

    return greet;
}

function greetUser(userName,greetProvider){
    return greetProvider() + " " + userName;
}


console.log(greetUser("Ayush", simpleGreetProvider));

console.log(greetUser("Ayush",timelyGreetProvider));

console.log(greetUser("Ayush", function() { return "Sasriakal ";}));

console.log(greetUser("Pratap",()=>"Namasthey "));

console.log(greetUser("Pratap",()=>"Vanakkam "));
console.log(greetUser("pratap",()=>"Namaskar "));

(function(){
    console.log("has to execute her right away..!");    
})();