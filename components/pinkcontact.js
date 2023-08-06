customElements.define('pinkcontact-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div class="pink-contact">
                <div><p>I'd love to be a small part of your big day. <br>Please contact me below for more details on flowers for your special event.</p></div>
                <a class="link-button" href="/contact">CONTACT</a>
            </div>
        `;
    }
});