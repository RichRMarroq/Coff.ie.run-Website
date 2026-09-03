class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container text-center mt-5 pt-5">
                    <p>&copy; 2026 coff.ie.run. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('nav-footer', Footer);