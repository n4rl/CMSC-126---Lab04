function evaluatee(){
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var departure = document.getElementById("departure").value;
    var returnn = document.getElementById("return").value;
    fname = fname.trim();
    lname = lname.trim();
    email = email.trim();
    origin = origin.trim();
    destination = destination.trim();
    departure = departure.trim();
    returnn = returnn.trim();
    
    if(!fname||!lname||!gender||!email||!origin||!destination||!departure||!returnn){
        alert("Please complete information");
    }
    

    var count = 0;
    var count1 = 0;
    var i = 0;
    var str = email.length;
    
    while(count != str){
        var letter = email.charAt(i);
            if(letter == "@"){
                count1++;
            }
        i++;
        count++;
    }
    
    if(count1 == 0){
        alert("Invalid Email");
    }
    
    var n = departure.localeCompare(returnn);
        
    if(n == 0){
        alert("No date/Same date! Please enter a valid date.");
    } else if(n == 1){
        alert("Invalid dates! You can't time travel!");
    }
    
    
}