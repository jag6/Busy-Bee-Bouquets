customElements.define('button-component', class extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['link', 'text'];
    }

    attributeChangedCallback(link, newLink, oldLink, text, newText, oldText) {
        this.innerHTML = `
            <a class="link-button" href="/${newLink}">${newText}</a>
        `;
    }

    connectedCallback() {
        const link = this.getAttribute('link');
        const text = this.getAttribute('text');
        
        this.innerHTML = `
            <a class="link-button" href="/${link}">${text}</a>
        `;
    }
});