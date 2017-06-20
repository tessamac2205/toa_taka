$(document).ready(function (){
    $('form#donation').submit(function (event){
        event.preventDefault();
        var donationAmount = $('#donationAmount').val();
        var firstName = $('#firstName').val();
        var lastname = $('#lastName').val();
        var email = $('#email').val();
        var country = $('#country').val();
        var city = $('#city').val();
        var comment = $('#comment').val();
        console.log(donationAmount + firstName + lastname + email + country + city + comment);
    });
});