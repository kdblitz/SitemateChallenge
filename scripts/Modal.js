class Modal {
  constructor(
    shortText,
    dialogText,
    confirmCallback = () => {},
    cancelCallback = () => {}
  ) {
    this.shortText = shortText;
    this.dialogText = dialogText;
    this.confirmCallback = confirmCallback;
    this.cancelCallback = cancelCallback;
  }

  modalTrigger() {
    const button = document.createElement('button');
    button.addEventListener(
      'click',
      this.openModal(this.dialogText, this.confirmCallback, this.cancelCallback)
    );
    button.innerHTML = this.shortText;
    return button;
  }

  openModal(message, confirmCallback, cancelCallback) {
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
        this.closeModal();
        confirmCallback();
      });

      const cancelButton = document.createElement('button');
      cancelButton.append('Cancel');
      cancelButton.addEventListener('click', () => {
        this.closeModal();
        cancelCallback();
      });

      modal.append(messageArea, confirmButton, cancelButton);

      modalWrapper.append(modal);

      document.querySelector('body').appendChild(modalWrapper);
    };
  }

  closeModal() {
    const ref = document.querySelector('div.modalWrapper');
    if (ref) {
      ref.remove();
    }
  }
}

export default Modal;
