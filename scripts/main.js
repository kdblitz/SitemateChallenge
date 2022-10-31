import { ModalTrigger } from './Modal.js';

const mainRef = document.querySelector('main');

// const modal = new Modal('Click me!');

// mainRef.append(modal.buttonTrigger());

mainRef.append(
  ModalTrigger(
    'click me!',
    'Are you sure you want to continue?',
    () => {
      const p = document.createElement('p');
      p.append('You just clicked "Yes"');
      mainRef.append(p);
    },
    () => {
      const p = document.createElement('p');
      p.append('You just clicked "Cancel"');
      mainRef.append(p);
    }
  )
);

mainRef.append(
  ModalTrigger(
    'another!',
    'Second message',
    () => {
      const p = document.createElement('p');
      p.append('You just clicked "Yes"');
      mainRef.append(p);
    },
    () => {
      const p = document.createElement('p');
      p.append('You just clicked "Cancel"');
      mainRef.append(p);
    }
  )
);

console.log('running');
