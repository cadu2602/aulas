function createCalculator() {
	return {
		display: document.querySelector('.display'),
		btnClear: document.querySelector('.btnClear'),

		start() {
			this.clickBtn();
			this.pressEnter()

		},
		pressEnter() {
			this.display.addEventListener('keyup', e => {
				if(e.keyCode === 13) {
					this.result()
				}
			})
		},
		result() {
			let bill = this.display.value;

			try {
				bill = eval(bill);


				if (!bill) {
					alert('Invalid account');
					return;
				}

				this.display.value = String(bill);
			} catch (e) {
				alert('Invalid account');
				return;
			}

		},
		clearDisplay() {
			this.display.value = '';
		},
		delNum() {
			this.display.value = this.display.value.slice(0, -1);
		},


		clickBtn() {
			document.addEventListener('click', function (event) {
				const el = event.target;

				if (el.classList.contains('btn-num')) {
					this.btnDisplay(el.innerText);
				}

				if (el.classList.contains('btn-clear')) {
					this.clearDisplay();
				}

				if (el.classList.contains('btn-del')) {
					this.delNum()
				}

				if (el.classList.contains('btn-eq')) {
					this.result();
				}
			}.bind(this));
		},
		btnDisplay(valor) {
			this.display.value += valor;
		}

	};
}

const calculator = createCalculator()
calculator.start();