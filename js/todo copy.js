class ToDo extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `${this.getAttribute('description')} | ${this.getAttribute('time')}min`;
    }
}

window.customElements.define('to-do', ToDo);