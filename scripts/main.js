import Modal from './Modal.js';

const mainRef = document.querySelector('main');

const myModal = new Modal(
  'Click me',
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
);

mainRef.append(myModal.modalTrigger());

// const mod = new Modal(
//   'another!',
//   'Second message',
//   () => {
//     const p = document.createElement('p');
//     p.append('You just clicked "Yes"');
//     mainRef.append(p);
//   },
//   () => {
//     const p = document.createElement('p');
//     p.append('You just clicked "Cancel"');
//     mainRef.append(p);
//   }
// );

// mainRef.append(mod.modalTrigger());
