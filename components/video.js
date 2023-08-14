customElements.define('video-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <video controls autoplay loop muted width="100%">
                <source src="https://res.cloudinary.com/dny2bkqkg/video/upload/v1691419089/Busy%20Bee%20Bouquets/ars_workshop_2022-busy_bee_bouquets_v1-_1080p_udgcds.mp4" type="video/webm">
                <source src="https://res.cloudinary.com/dny2bkqkg/video/upload/v1691419089/Busy%20Bee%20Bouquets/ars_workshop_2022-busy_bee_bouquets_v1-_1080p_udgcds.mp4" type="video/mp4">
            </video>
        `;
    }
});