import validateNumber from './numberValidator';
import findPayService from './payService';

class Form {
  formHtmlEl = `
    <div class="form-container">
      <div class="card-images-container"></div>
      <form class="form">
        <input class="form-input">
        <input type="submit" value="Click to validate">
      </form>
    </div>`;

  cardImgs = ['maestro', 'masterCard', 'mir', 'visa'];

  drawEl() {
    document.querySelector('body').innerHTML += this.formHtmlEl;
    this.form = document.querySelector('.form-container');
  }

  addCardImg() {
    for (let i = 0; i < this.cardImgs.length; i += 1) {
      const container = document.querySelector('.card-images-container');
      container.innerHTML += `<img src="./form/png/${this.cardImgs[i]}.png" class="${this.cardImgs[i]}"'>`;
    }
  }

  addListeners() {
    const form = this.form.querySelector('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const cardNumber = form.querySelector('.form-input').value;

      if (validateNumber(cardNumber)) {
        const payService = findPayService(cardNumber);
        const cardImg = this.form.querySelector(`.${payService}`);

        cardImg.classList.add('active');
      } else {
        alert('This card number is invalid');
        form.reset();
      }
    });
  }
}

export default Form;
