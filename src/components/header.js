class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">coff.ie.run</a>
                        <button class="navbar-toggler mx-auto" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse flex-grow-1" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="shops.html">Shops</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="faq.html">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}


customElements.define('nav-header', Header);    