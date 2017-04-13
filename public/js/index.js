// Module Pattern
var MODULE = (function(){

    // private session
    function _privateMethod(){}// for demo purpose

    // public session in return
    return {
        // variable
        variable_demo: 1,
        
        // method
        function_demo: function(){
            _privateMethod();
        },

        // object
        config: {
            apiKey: "AIzaSyCdMHNw3Bfat-ZU4STKRqi2M90WBwC6k1w",
            authDomain: "retire-early.firebaseapp.com",
            databaseURL: "https://retire-early.firebaseio.com",
            projectId: "retire-early",
            storageBucket: "retire-early.appspot.com",
            messagingSenderId: "691990546510"
        },
    };
})();

// Initialize Firebase
firebase.initializeApp(MODULE.config);

// Event handler
// log in with validation
$(".form-login").on("submit", function(event){
    event.preventDefault();

    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    var promise = firebase.auth().signInWithEmailAndPassword(email,password);
    promise.catch(function(e) {
        var errorCode = e.code;
        var errorMessage = e.message;

        /*Display Error Messages*/
        if (errorCode == 'auth/wrong-password') {
            $('.err-msg').html("Invalid password!");
        }
        else if(errorCode == 'auth/invalid-email'){
            $('.err-msg').html("Invalid email");
        }
        else if(errorCode == 'auth/user-not-found'){
            $('.err-msg').html("User not found!");
        }
        else {
            $('.err-msg').html(errorMessage);
        }

        $(".err-box").css("display", "block");
    });
});

// sign up with validation
$(".form-signup").on("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("signup_email").value;
    var password = document.getElementById("signup_password").value;
    var promise = firebase.auth().createUserWithEmailAndPassword(email,password);
    promise.catch(function(e) {
        var errorCode = e.code;
        var errorMessage = e.message;

        /*Display Sign Up error messages*/
        if (errorCode == 'auth/email-already-in-use') {
            $('.err-msg').html("Email already in use");
        }
        else if(errorCode == 'auth/invalid-email'){
            $('.err-msg').html("Invalid email");
        }
        else if(errorCode == 'auth/weak-password'){
            $('.err-msg').html("Password too weak!");
        }
        else {
            $('.err-msg').html(errorMessage);
        }
        
        $(".err-box").css("display", "block");
    });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location = "main.html";
    } else {
        // User is signed out.
        //window.location = "index.html";
    }
});

$(".hide-alert").focusin(function(){
    $(".err-box").css("display", "none");
});