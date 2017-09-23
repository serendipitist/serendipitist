import '../scss/styles.scss';
import Main from './Main';

//let inst = new Main();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
const dayName =days[d.getDay()];
let node = document.querySelector('#print-msg');

node.innerHTML = "Happy " + dayName + "!";