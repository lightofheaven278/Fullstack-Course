let login = prompt('Please login!');
let message = (login == 'Employee') ?
   'Hello' :
   (login == 'Director') ?
       'Greetings' :
       (login == '') ?
           'No login' :
           '';

alert(message);