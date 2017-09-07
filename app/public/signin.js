$('.form').find('input, textarea').on('keyup blur focus', function(e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if ($this.val() === '') {
            label.removeClass('highlight');
        } else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function(e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

//$(document).ready(function() {


$('#submitSignup').on('click', function(e) {
    e.preventDefault();
    console.log('click')
    var userData = {
        firstname: $('#firstNameSignup').val(),
        lastname: $('#lasttNameSignup').val(),
        email: $('#emailSignup').val(),
        password: $('#passwordSignup').val()

    };
    console.log(userData)
    $.post('/signUp', userData);
    // getChirps();
});
//});

$('#submitLogin').on('click', function(e) {
    e.preventDefault();
    console.log('click')
    var userData = {
        email: $('#emailLogin').val(),
        password: $('#passwordLogin').val()

    };
    console.log(userData)
    $.post('/signIn', userData);
    // getChirps();
});