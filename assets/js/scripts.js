jQuery(document).ready(function () {


    $('.spec').hide();
    $('input:radio[name=capacity]').click(function () {
        $('.spec').toggle();
    });
    $(function () {
        $("#datepicker").datepicker();
    });
    $.backstretch("assets/img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function () {
        $.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function () {
        $.backstretch("resize");
    });

    /*
     Form
     */

    function validate() {


    }

    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var email = $('#email').val()
        var phone = $('#phone').val()

        parent_fieldset.find('input[type="text"], input[type="password"],  input[name="email"], input[type="radio"] textarea').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            }
            else {
                $(this).removeClass('input-error');
            }

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var pe=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            if (!re.test(email)) {
                $('#email').addClass('input-error');
                $('.emailError').text('Enter a valid email address');
                next_step = false;

            } else {
                $(this).removeClass('input-error');
                $('.emailError').text('');
            }

            if (!pe.test(phone) ){
                $('#phone').addClass('input-error');
                $('.phoneError').text('Enter a valid  phone number');
                next_step = false;

            } else {
                $(this).removeClass('input-error');
                $('.phoneError').text('');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {

        $(this).find('input[type="text"], input[type="password"], input[name="email"], input[type="radio"],textarea').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {

                $(this).removeClass('input-error');
            }
        });

    });

    $('.form-bottom').hide();


});

function isSelf(user) {
    $('.form-bottom').show();
    $('.first').hide();
    if (user == 'no') {
        $('#self').val('No')
    } else {
        $('#self').val('yes')
    }


}
