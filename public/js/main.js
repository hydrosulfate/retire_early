// Module Pattern
var MODULE = (function(){

    return {
        config: {
            apiKey: "AIzaSyCdMHNw3Bfat-ZU4STKRqi2M90WBwC6k1w",
            authDomain: "retire-early.firebaseapp.com",
            databaseURL: "https://retire-early.firebaseio.com",
            projectId: "retire-early",
            storageBucket: "retire-early.appspot.com",
            messagingSenderId: "691990546510"
        }
    };
})();

// Initialize Firebase
firebase.initializeApp(MODULE.config);

$(document).ready(function(){   
    $("#sign_out").click(function() {
        event.preventDefault();
        firebase.auth().signOut();
    });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        $("#user").html(user.email.split("@")[0]+" <span class='caret'></span>");
    } else {
        // User is signed out.
        window.location = "index.html";
    }
});