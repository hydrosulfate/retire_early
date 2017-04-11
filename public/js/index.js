var SCRIPT={};

SCRIPT.turn_red=function(){
    $('#des').css({'color':'red', 'font-size':'20px'}); 
} 

SCRIPT.turn_black=function(){
    $('#des').css({'color':'black', 'font-size':'12px'}); 
} 



SCRIPT.form_btn=function(){
    var name = document.myform.username.value;
    if(name != '')
        alert('Hello '+name+'!');
    else
        alert('Dont be shy');
        
}

$(function(){
    $('#trigger').on('mousedown', SCRIPT.turn_red);
//    $('#trigger').click(SCRIPT.turn_red);
    $('#trigger').on('mouseup', SCRIPT.turn_black);
    
    //faster perfomance
    $('.btn').on('click', SCRIPT.form_btn);            //direct event: new added .btn do NOT update
//    $(document.body).on('click', '.btn', SCRIPT.form_btn);   //delegated event: new added .btn will update
    
    
    (function(){
        console.log("self-Executing function");
    })();
});