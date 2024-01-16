customElements.define('footer-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <footer>
                <div><p>BUSY BEE BOUQUETS&copy; 2022-2024</p></div>
                <div><a href="/privacy-policy">PRIVACY POLICY</a></div>
                <hflinks-component></hflinks-component>
            </footer>
        `;
    }
});