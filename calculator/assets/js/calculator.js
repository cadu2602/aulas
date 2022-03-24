function Calculator() {
  this.display = document.querySelector('.display')


  this.start = () => {
    this.catchClick()
    this.catchEnter()
  };

  this.catchEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13)  {
        this.result()
      }
    })
  }


  this.catchClick = () => {
    document.addEventListener('click', event => {
      const el = event.target
      if (el.classList.contains('btn-num')) this.addNumDisplay(el)
      if (el.classList.contains('btn-clear')) this.clear()
      if (el.classList.contains('btn-del')) this.del()
      if (el.classList.contains('btn-eq')) this.result()
    })
  }
  this.addNumDisplay = el => {
  this.display.value += el.innerText
  this.display.focus()
 }
  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1)
  this.result = () => {
    try {
      const bill = eval(this.display.value)

      if (!bill) {
        alert('Invalid account')
        return;
      }

      this.display.value = bill
    } catch (e) {
      alert('Invalid account')
      return;
    }
  }



}




const calculator = new Calculator();
calculator.start();