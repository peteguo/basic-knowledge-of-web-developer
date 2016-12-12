import $ from 'jquery';

$('body').html('Hello');

require.ensure([], () => {
const Button = require('./Components/Button').default;
const button = new Button('google.com');

button.render('a');
}, 'button');
