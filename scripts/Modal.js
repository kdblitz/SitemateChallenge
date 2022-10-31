const ModalTrigger = (shortText, dialogText, callback) => {
  const button = document.createElement('button');
  button.addEventListener('click', openModal(dialogText, callback));
  button.innerHTML = shortText;
  return button;
};

const closeModal = () => {
  document.querySelector('div.modalWrapper').remove();
};

const openModal = (message, callback) => {
  return () => {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modalWrapper');

    const modal = document.createElement('div');
    modal.append(message);

    const confirmButton = document.createElement('button');
    confirmButton.append('Yes');
    confirmButton.addEventListener('click', callback);

    const cancelButton = document.createElement('button');
    cancelButton.append('Cancel');
    cancelButton.addEventListener('click', closeModal);

    modalWrapper.append(modal);
    modalWrapper.append(confirmButton);
    modalWrapper.append(cancelButton);

    document.querySelector('body').appendChild(modalWrapper);
  };
};

export { ModalTrigger };
