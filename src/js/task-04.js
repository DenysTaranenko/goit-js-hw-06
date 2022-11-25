const refs = {
    decrementBtn = document.querySelector('button[data-action ="decrement"]');
    incrementBtn = document.querySelector('button[data-action ="increment"]');
    valueEl = document.querySelector('#value');
}


const clickFunction = {
    value: 0,
    incMethod() = {
        this.value += 1;
        return value.textContent = this.value;
    }
    decmethod() = {
        this.value -= 1;
        return value.textContent = this.value;
    }
}
