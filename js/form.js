$(document).ready(function(){
    $('.submit').click(function (event) { 

        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (name.length >= 2) {
            statusElm.append('<p>Name is valid</p>')
        } else {
            event.preventDefault()
            statusElm.append('<p>Name is not valid</p>')
        }

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<p>Email is valid</p>')
        } else {
            event.preventDefault()
            statusElm.append('<p>Email is not valid</p>')
        }

        if (message.length >= 10) {
            statusElm.append('<p>message is valid</p>')
        } else {
            event.preventDefault()
            statusElm.append('<p>message is not valid</p>')
        }
    });
})