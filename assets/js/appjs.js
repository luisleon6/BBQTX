$(document).ready(function(){
    $('#box-form').submit(function(){
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);
    });

    var txt_user = localStorage.getItem('usuario');
    var txt_password =localStorage.getItem('password');

    if(txt_user != null && txt_user != 'undefined'){
        //llamamos al documento sesion.html
        window.location = 'sesion.html';
    }
});
