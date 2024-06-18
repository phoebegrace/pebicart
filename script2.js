function myfunction(){
    let confirmation = confirm("Are you ready to check-out?")
    if (confirmation == true){
        let email = prompt("Enter your email:");
        if (email !== ""){
            alert ("Invoice will be sent to your email. Thank you for purchasing! :>")
        }
        }
    }