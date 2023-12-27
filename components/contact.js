customElements.define('contact-component', class extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['title', 'text1', 'text2'];
    }

    attributeChangedCallback(title, newTitle, oldTitle, text1, newText1, oldText1, text2, newText2, oldText2) {
        this.innerHTML = `
            <section class="container">
                <section class="container-header">
                    <h2>${newTitle}</h2>
                </section>
                <div class="contact-links-text">
                    <contactlinks-component class="contact-links"></contactlinks-component>
                    <div class="text">
                        <div<p>${newText1}</p></div>
                        <div<p>${newText2}</p></div>
                    </div>
                </div>
            </section>
        `;
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const text1 = this.getAttribute('text1');
        const text2 = this.getAttribute('text2');
        
        this.innerHTML = `
            <section class="container">
                <section class="container-header">
                        <h2>${title}</h2>
                </section>
                <div class="contact-links-text">
                    <contactlinks-component class="contact-links"></contactlinks-component>
                    <div class="contact-text">
                        <div><p>${text1}</p></div>
                        <div><p>${text2}</p></div>
                    </div>
                </div>
            </section>
        `;
    }
});

customElements.define('contactlinks-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <ul>
                <li><a href="https://www.instagram.com/busy_bee_bouquets/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=18055039770"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="tel:+18055039770"><i class="fa-solid fa-mobile-screen-button"></i></a></li>
                <li><a href="mailto:blasingamebusiness@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
            </ul>
        `;
    }
});