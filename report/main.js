function sendQ(){

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;
    var deviceType = document.getElementById("usersDevice").value;
    var issueProvided = document.getElementById("usersIssue").value;
    var country = document.getElementById("countryInput").value;
    var msg = document.getElementById("comment").value;


    // alert(name + "\n" + email + "\n" + phone + "\n" + contactMethod + "\n" + busType + "\n" + city + "\n" + subject + "\n" + msg);

    if( name == "" 
    || email == ""  
    || country == "" 
    || issueProvided == "" 
    || deviceType == "" 
    || msg == "")
    {
        alert("Something is missing, you have to fill everything");
    }
    else{

        var content = "";

        content += "Name: " + name + " <br> ";
        content += "Email: " + email + " <br> ";
        content += "Phone Number: " + phone + " <br> ";
        content += "Device Type: " + deviceType + " <br> ";
        content += "Country: " + country + " <br> ";
        content += "Issue: " + issueProvided + " <br> <br> ";
        
        content += "The user's message is: " + " <br> ";
        content += msg;

        var tempParam = {

            from_name: "Instant Memes Web App",
            to_name: "Asem",
            message: content
    
        };
    
        emailjs.send("service_f8h746w", "template_sfjszwa", tempParam)
        .then(function(res){
            
            console.log("succes", res.status);
            alert("We receved your report, we will respond to you as soon as possible");

            document.getElementById("nameInput").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("phoneInput").value = "";
            document.getElementById("usersDevice").value = "";
            document.getElementById("usersIssue").value = "";
            document.getElementById("countryInput").value = "";
            document.getElementById("comment").value = "";

        }).catch(function (error) {
            
            // console.error('oops, something went wrong!', error);
            alert("Ops!!! something went wrong. If you need any help please contact us on any of our social media accounts");
        
        });


    }

    

}