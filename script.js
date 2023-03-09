'use sctrict'

const input = document.getElementById('input'),
	p = document.getElementById('text');

function debounce(callee, timeoutMs) {

	return function perform(...args) {
		let previousCall = this.lastCall;

		this.lastCall = Date.now();

		if (previousCall && this.lastCall - previousCall <= timeoutMs) {
			clearTimeout(this.lastCallTimer);
		}

		this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
	}
}

function handleInput() {
	p.innerHTML = `${input.value}`;
}

const debouncedHandle = debounce(handleInput, 500);

input.addEventListener('input', debouncedHandle);