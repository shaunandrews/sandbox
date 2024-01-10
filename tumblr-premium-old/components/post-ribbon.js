class postRibbon extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .post-ribbon {
                    background: var(--white);
                    color: var(--black);
                    display: flex;
                    justify-content: space-between;
                    padding: var(--spacing-2);
                }

                .post-ribbon .post-type {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                }
            </style>

            <div class="post-ribbon">
                <div class="post-type text">
                    <icon-svg name="text"></icon-svg>
                    <label>Text</label>
                </div>

                <div class="post-type photo">
                    <icon-svg name="photo"></icon-svg>
                    <label>Photo</label>
                </div>

                <div class="post-type quote">
                    <icon-svg name="quote"></icon-svg>
                    <label>Quote</label>
                </div>

                <div class="post-type link">
                    <icon-svg name="link"></icon-svg>
                    <label>Link</label>
                </div>

                <div class="post-type chat">
                    <icon-svg name="chat"></icon-svg>
                    <label>Chat</label>
                </div>

                <div class="post-type audio">
                    <icon-svg name="audio"></icon-svg>
                    <label>Audio</label>
                </div>

                <div class="post-type video">
                    <icon-svg name="video"></icon-svg>
                    <label>Video</label>
                </div>
            </div>
        `; 
    }
}

customElements.define('post-ribbon', postRibbon);