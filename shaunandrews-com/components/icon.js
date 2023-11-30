class icon extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get the icon name from an attribute
        const iconName = this.getAttribute('name');

        // Fetch the SVG content
        fetch(`icons/${iconName}.svg`)
            .then(response => response.text())
            .then(data => {
                // Inject the SVG content into the component's innerHTML
                this.innerHTML = data;
            })
            .catch(error => {
                console.error("Error fetching SVG:", error);
            });
    }
}
customElements.define('icon-svg', icon);
