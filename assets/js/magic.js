// magic.js
$(document).ready(function () {

    $('.thank').hide();

    $('#submitted').click(function(){
        $('#submitted').text('PLease wait')
    });

    // process the form
    $('form').submit(function (event) {

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'fullname': $('input[name=fullname]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=telephone]').val(),
            'dob': $('input[name=dob]').val(),

            'sector': $('input[name=sector]').val(),
            'org': $('input[name=org]').val(),
            'position': $('input[name=position]').val(),
            'size': $('input[name=size]').val(),
            'url': $('input[name=url]').val(),
            'self': $('input[name=self]').val(),

            'qualify': $('textarea[name=qualify]').val(),
            'achievement': $('textarea[name=achievement]').val(),
            'capacity': $('input:radio[name=capacity]').val(),
            'specify': $('textarea[name=specify]').val(),


        };

        // process the form
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'process.php', // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true
        })
            // using the done promise callback
            .done(function (data) {

                // log data to the console so we can see
                console.log(data);
                // here we will handle errors and validation messages
                if (!data.success) {
                    // handle errors for name ---------------
                    if (data.errors.name) {
                        $('#name-group').addClass('has-error'); // add the error class to show red input
                        $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for email ---------------
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); // add the error class to show red input
                        $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
                    }
                    // handle errors for phone ---------------
                    if (data.errors.phone) {
                        $('#phone-group').addClass('has-error'); // add the error class to show red input
                        $('#phone-group').append('<div class="help-block">' + data.errors.phone + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for description ---------------
                    if (data.errors.dob) {
                        $('#dob').addClass('has-error'); // add the error class to show red input
                        $('#dob').append('<div class="help-block">' + data.errors.dob + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for description ---------------
                    if (data.errors.sector) {
                        $('#sector').addClass('has-error'); // add the error class to show red input
                        $('#sector').append('<div class="help-block">' + data.errors.dob + '</div>'); // add the actual error message under our input
                    }

                     // handle errors for description ---------------
                     if (data.errors.org) {
                        $('#org').addClass('has-error'); // add the error class to show red input
                        $('#org').append('<div class="help-block">' + data.errors.org + '</div>'); // add the actual error message under our input
                    }

                     // handle errors for description ---------------
                     if (data.errors.position) {
                        $('#position').addClass('has-error'); // add the error class to show red input
                        $('#position').append('<div class="help-block">' + data.errors.position + '</div>'); // add the actual error message under our input
                    }
                      // handle errors for description ---------------
                      if (data.errors.size) {
                        $('#size').addClass('has-error'); // add the error class to show red input
                        $('#size').append('<div class="help-block">' + data.errors.size + '</div>'); // add the actual error message under our input
                    }

                    if (data.errors.url) {
                        $('#url').addClass('has-error'); // add the error class to show red input
                        $('#url').append('<div class="help-block">' + data.errors.url + '</div>'); // add the actual error message under our input
                    }

                    if (data.errors.qualify) {
                        $('#qualify').addClass('has-error'); // add the error class to show red input
                        $('#qualify').append('<div class="help-block">' + data.errors.qualify + '</div>'); // add the actual error message under our input
                    }

                    if (data.errors.achievement) {
                        $('#achievement').addClass('has-error'); // add the error class to show red input
                        $('#achievement').append('<div class="help-block">' + data.errors.achievement + '</div>'); // add the actual error message under our input
                    }

                    if (data.errors.capacity) {
                        $('#capacity').addClass('has-error'); // add the error class to show red input
                        $('#capacity').append('<div class="help-block">' + data.errors.capacity + '</div>'); // add the actual error message under our input
                    }
                    if (data.errors.specify) {
                        $('#capacity').addClass('has-error'); // add the error class to show red input
                        $('#capacity').append('<div class="help-block">' + data.errors.specify + '</div>'); // add the actual error message under our input
                    }




                } else {
                      var name = $('#fullname').val();
                    var tweet = 'https://twitter.com/intent/tweet?url=http://www.bd.edgar.co.ke&text='+ name +'+has+been+nominated+for+top+40+under+40+women+2016+@BD_Africa+Nominate+someone &hashtags=Top40Under40Ke'
                    $("#twitter").attr("href", tweet)
                    $('.forms').hide()
                    $('.thank').show()

                }
            })

            // using the fail promise callback
            .fail(function (data) {

                // show any errors
                // best to remove for production
                console.log(data);
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
