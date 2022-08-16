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
  }

  addCardImg() {
    for (let i = 0; i < this.cardImgs.length; i += 1) {
      const container = document.querySelector('.card-images-container');
      container.innerHTML += `<img src='./form/png/${this.cardImgs[i]}'>`;
    }
  }
}

export default Form;
