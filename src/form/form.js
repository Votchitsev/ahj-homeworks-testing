import validateNumber from './numberValidator';

class Form {
  formHtmlEl = `
    <div class="form-container">
      <div class="card-images-container"></div>
      <form class="form">
        <input class="form-input">
        <input type="submit" value="Click to validate">
      </form>
    </div>`;

  cardImgs = ['maestro.png', 'masterCard.png', 'mir.png', 'visa.png'];

  drawEl() {
    document.querySelector('body').innerHTML += this.formHtmlEl;
    this.form = document.querySelector('.form-container');
  }

  addCardImg() {
    for (let i = 0; i < this.cardImgs.length; i += 1) {
      const container = document.querySelector('.card-images-container');
      container.innerHTML += `<img src='./form/png/${this.cardImgs[i]}'>`;
    }
  }

  addListeners() {
    const form = this.form.querySelector('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateNumber(form.querySelector('.form-input').value)) {
        alert('yes');
      } else {
        alert('This card number is invalid');
        form.reset();
      }
    });
  }
}

export default Form;
