import { ModalTrigger } from './Modal.js';

const mainRef = document.querySelector('main');

// const modal = new Modal('Click me!');

// mainRef.append(modal.buttonTrigger());

mainRef.append(ModalTrigger('click me!', 'Are you sure you want to continue?'));

console.log('running');
