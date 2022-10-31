const ModalTrigger = (
  shortText,
  dialogText,
  confirmCallback = () => {},
  cancelCallback = () => {}
) => {
  const button = document.createElement('button');
  button.addEventListener(
    'click',
    openModal(dialogText, confirmCallback, cancelCallback)
  );
  button.innerHTML = shortText;
  return button;
};

const closeModal = () => {
  const ref = document.querySelector('div.modalWrapper');
  if (ref) ref.remove();
};

const openModal = (message, confirmCallback, cancelCallback) => {
  return () => {
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modalWrapper');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const messageArea = document.createElement('p');
    messageArea.append(message);

    const confirmButton = document.createElement('button');
    confirmButton.append('Yes');
    confirmButton.addEventListener('click', () => {
      closeModal();
      confirmCallback();
    });

    const cancelButton = document.createElement('button');
    cancelButton.append('Cancel');
    cancelButton.addEventListener('click', () => {
      closeModal();
      cancelCallback();
    });

    modal.append(messageArea, confirmButton, cancelButton);

    modalWrapper.append(modal);

    document.querySelector('body').appendChild(modalWrapper);
  };
};

export { ModalTrigger };
