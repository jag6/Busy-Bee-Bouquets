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

customElements.define('pinkcontact-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="pink-contact">
                <div><p>I'd love to be a small part of your big day. <br>Please contact me below for more details on flowers for your special event.</p></div>
                <button-component><button-component>
            </div>
        `;

        if(document.querySelector('pinkcontact-component')) {
            const pinkContact = document.querySelector('pinkcontact-component');
            pinkContact.querySelector('a').src = '/contact';
            pinkContact.querySelector('a').textContent = 'CONTACT';
        }
    }
});