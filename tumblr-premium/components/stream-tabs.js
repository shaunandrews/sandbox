class streamTabs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <style>
                .stream-tabs {
                    display: flex;
                }

                .stream-tabs li {
                    padding: var(--spacing-2);
                    opacity: 0.8;
                }

                .stream-tabs li.active {
                    font-weight: bold;
                    opacity: 1;
                    border-bottom: 3px solid var(--accent);
                }
            </style>

            <ul class="stream-tabs">
                <li class="active">Following</li>
                <li>For you</li>
                <li>Your tags</li>

            </ul>
        `;
  }
}

customElements.define("stream-tabs", streamTabs);
