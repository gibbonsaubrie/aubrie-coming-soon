$( document ).ready(function() {
});

$('#contact-us').click(function() {
    var name = $("input#recipient-name").val();
    var email = $("input#recipient-email").val();
    var phone = $("input#recipient-phone").val();
    var message = $("textarea#recipient-message").val();

    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    location.href = "mailto:admin@executiveway.com?subject="+ encodeURI("New Submission From Coming Soon Website") +"&body=" + encodeURI(body);
    var name = $("input#recipient-name").val('');
    var email = $("input#recipient-email").val('');
    var message = $("textarea#recipient-message").val('');
});