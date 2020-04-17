$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var phone = $("#phone").val();
    var code = $("#code").val();
    var ckphone = $("#ckphone").val();
    var order = $("#order").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "https://httpbin.org/post",
        dataType: "json",
        data: "fname=" + fname + "&lname=" + lname + "&email=" + email + "&address=" + address + "&city=" + city + "&phone=" + phone + "&code=" + code + "&ckphone=" + ckphone + "&order=" + order + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                //open a new window note:this is a popup so it may be blocked by your browser
                var newWindow = window.open("", "new window", "width=200, height=100");

                //write the data to the document of the newWindow
                console.log(text);
                newWindow.document.write(JSON.stringify(text));
                
                formSuccess();
            }
        },
        error : function(text){
            formError();
            submitMSG(false,text);
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}