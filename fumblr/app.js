// Toolbar Component
class FumblrToolbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();

        this.querySelector('[label="Shop"]').addEventListener('click', () => {
            const fumblrMart = this.querySelector('fumblr-mart');
            if (fumblrMart.hasAttribute('hidden')) {
                fumblrMart.removeAttribute('hidden');
            } else {
                fumblrMart.setAttribute('hidden', 'true');
            }
        });
    }

    render() {
        this.innerHTML = `
            <style>
                @import url('reset.css');

                #toolbar {
                    background-color: rgba(0, 25, 53, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--primary-text);
                    height: var(--toolbar-height);
                    /* position: fixed;
                    top: 0;
                    right: 0;
                    left: 0; */
                    padding: 0 var(--spacing-3);
                    z-index: 1;
                    display: flex;
                    gap: var(--spacing-4);
                    align-items: center;
                }

                #logo {
                    font-size: 24px;
                }

                .search {
                    flex-grow: 1;
                }

                .search input[type="search"] {
                    text-align: center;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: var(--radii-1);
                    padding: var(--spacing-1) var(--spacing-2);
                    border: none;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }

                .search input[type="search"]::placeholder {
                    color: rgba(255, 255, 255, 0.3);
                }

                .search input[type="search"]:focus {
                    outline: none;
                    text-align: left;
                    border-color: rgba(255, 255, 255, 0.3);
                    background: white;
                }

                .search input[type="search"]:focus::placeholder {
                    color: rgba(0, 0, 0, 0.5);
                }

                .toolbar-button-group {
                    display: flex;
                }
            </style>

            <div id="toolbar">
                <h1 id="logo">fumblr</h1>

                <div class="search">
                    <input type="search" placeholder="Find your weird..." />
                </div>

                <div class="toolbar-button-group">
                    <fumblr-toolbar-button
                        label="Shop"
                        icon="shop"
                    ></fumblr-toolbar-button>

                    <fumblr-toolbar-button
                        label="Activity"
                        icon="flash"
                    ></fumblr-toolbar-button>

                    <fumblr-toolbar-button
                        label="Settings"
                        icon="settings"
                    ></fumblr-toolbar-button>
                </div>
            </div>

            <fumblr-mart hidden="true"></fumblr-mart>
        `;
    }
}
customElements.define('fumblr-toolbar', FumblrToolbar);


// Toolbar Button Component
class FumblrToolbarButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

        // Attach the event listener after rendering
        const buttonElement = this.shadowRoot.querySelector('.toolbar-button');
        buttonElement.addEventListener('click', () => {
            buttonElement.classList.toggle('active');
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .toolbar-button {
                    background: none;
                    border: none;
                    color: var(--secondary-text);
                    padding: var(--spacing-2);
                    border-radius: var(--radii-1);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-1);
                }

                .toolbar-button label {
                    display: none;
                }

                .toolbar-button svg {
                    height: 24px;
                    width: 24px;
                    display: block;
                    opacity: 0.6;
                }

                .toolbar-button:hover svg,
                .toolbar-button.active svg {
                    opacity: 1;
                }
            </style>

            <button class="toolbar-button">
                <label>
                    ${this.getAttribute('label')}
                </label>
                <svg-loader data-icon="${this.getAttribute('icon') ? this.getAttribute('icon') : 'activity'}"></svg-loader>
            </button>
        `;
    }
}
customElements.define('fumblr-toolbar-button', FumblrToolbarButton);


// FumblrMart Component
class FumblrMart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .funmblr-mart {
                    position: fixed;
                    z-index: 1;
                    top: calc(var(--toolbar-height) - var(--spacing-1));
                    right: 105px;
                    width: 420px;
                    height: 560px;
                    overflow: auto;
                    background: var(--neutral-bg);
                    color: var(--neutral-text);
                    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.4);
                    /* padding: var(--spacing-3); */
                    border-radius: var(--radii-1);
                    display: flex;
                    flex-direction: column;
                }

                header {
                    position: sticky;
                    top: 0;
                    background: rgba(242, 242, 242, 0.6);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                }

                header h2 {
                    margin-top: var(--spacing-2);
                    padding: 0 var(--spacing-3);
                    text-align: center;
                }

                .nav {
                    display: flex;
                    justify-content: center;
                }

                .nav li {
                    cursor: pointer;
                    padding: var(--spacing-1) var(--spacing-3);
                    border-bottom: 5px solid transparent;
                    opacity: 0.6;
                }

                .nav li:hover {
                    opacity: 1;
                }

                .nav li.active {
                    font-weight: 700;
                    border-bottom: 3px solid var(--primary-bg);
                    opacity: 1;
                }

                .products {
                    padding: var(--spacing-2);
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-1);
                }

                .product {
                    display: flex;
                    gap: var(--spacing-3);
                    align-items: center;
                    border-radius: var(--radii-1);
                    padding: var(--spacing-1);
                }

                .product:hover {
                    background: rgba(0, 0, 0, 0.05);
                }

                .product-thumbnail {
                    width: 72px;
                    height: 72px;
                    border-radius: var(--radii-1);
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }

                .product-description {
                    flex-grow: 1;
                    align-self: center;
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-1);
                    user-select: none;
                }

                .product-description h3 {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.2;
                }

                .product-description p {
                    font-size: 14px;
                    line-height: 120%;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .product-buy-button {
                    flex-grow: 0;
                }
            </style>

            <div class="funmblr-mart">
                <header>
                    <h2>fumblrMart</h2>
                    
                    <ol class="nav">
                        <li class="active">All</li>
                        <li>Badges</li>
                        <li>Frames</li>
                        <!-- <li>Merch</li> -->
                        <li>Gifts</li>
                    </ol>
                </header>

                <ol class="products">
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-bones-badge.png" />
                        <div class="product-description">
                            <h3>Bones Badge</h3>
                            <p>Show the world your allegiance to bones with this badge of honor.</p>
                        </div>
                        <button class="product-buy-button">$5.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-hewie-badge.png" />
                        <div class="product-description">
                            <h3>Hewie Badge</h3>
                            <p>Share your loyalty to all things spectral in one fell swoop.</p>
                        </div>
                        <button class="product-buy-button">$5.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-supporter-badge.png" />
                        <div class="product-description">
                            <h3>Supporter Badge</h3>
                            <p>Keep Tumblr's engines oiled and running with these loyalty badges.</p>
                        </div>
                        <button class="product-buy-button">$7.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-crab-checkmark.png" />
                        <div class="product-description">
                            <h3>Crab Checkmark</h3>
                            <p>They're back! Turn your Tumblr into a crustacean nation and display these very important crab checkmarks on your blog.</p>
                        </div>
                        <button class="product-buy-button">$7.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-rainbow-crab-checkmark.png" />
                        <div class="product-description">
                            <h3>Rainbow Crab Checkmark</h3>
                            <p>Turns out there is treasure at the end of the rainbow — but no one told us it was going to be crustaceans! Give your blog some color with these very important rainbow crab checkmarks.</p>
                        </div>
                        <button class="product-buy-button">$7.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-babylonian-checkmark.png" />
                        <div class="product-description">
                            <h3>Babylonian Checkmark</h3>
                            <p>This would've been an easy way to become the most important person in all of Babylon. But now, you can become a coppery Babylonian on Tumblr!</p>
                        </div>
                        <button class="product-buy-button">$7.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-lunar-badge.gif" />
                        <div class="product-description">
                            <h3>Lunar Badge</h3>
                            <p>This badge will always display the current phase of the moon. Equip this badge if you hold the moon close to your heart, if you speak her language, or if you are a werewolf.</p>
                        </div>
                        <button class="product-buy-button">$5.99</button>
                    </li>
                    <li class="product">
                        <img class="product-thumbnail" src="images/product-important-internet-checkmark.png" />
                        <div class="product-description">
                            <h3>Blue Internet Checkmarks</h3>
                            <p>This is not a verification status; it's an Important Blue Internet Checkmark, which in 2023 is just as legit. Purchase today and get two blue checkmarks for the price of one!</p>
                        </div>
                        <button class="product-buy-button">$5.99</button>
                    </li>
                </ol>
            </div>
        `;
    }
}
customElements.define('fumblr-mart', FumblrMart);


// Sidebar Component
class FumblrSidebar extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // this.shadowRoot.innerHTML = `
        this.innerHTML = `
            <style>
                @import url('reset.css');

                #sidebar {
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--secondary-text);
                    width: var(--sidebar-width);
                    display: flex;
                    flex-direction: column;
                }

                .sidebar-group.grow {
                    flex-grow: 1;
                }

                hr {
                    border: none;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    margin: var(--spacing-3) 0;
                }

                @media (max-width: 768px) {
                    #sidebar {
                        display: none;
                    }
                }
            </style>

            <div id="sidebar">
                <div class="sidebar-group grow">
                    <fumblr-current-site></fumblr-current-site>

                    <fumblr-menu>
                        <fumblr-menu-item label="Following" highlight="8" is-active></fumblr-menu-item>

                        <fumblr-menu-item label="For You"></fumblr-menu-item>

                        <fumblr-menu-item label="Your Tags"></fumblr-menu-item>

                        <fumblr-menu-item label="Your Likes"></fumblr-menu-item>

                        <fumblr-menu-item label="Your Posts"></fumblr-menu-item>

                        <hr />

                        <fumblr-menu-item label="Explore"></fumblr-menu-item>

                        <fumblr-menu-item label="Messages" highlight="12"></fumblr-menu-item>

                        <fumblr-pinned-messages></fumblr-pinned-messages>
                    </fumblr-menu>
                </div>

                <div class="sidebar-group radar">
                    <fumblr-radar></fumblr-radar>
                </div>
            </div>
        `;
    }
}
customElements.define('fumblr-sidebar', FumblrSidebar);


// Current Site Component
class FumblrCurrentSite extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

        const currentBlog = this.shadowRoot.querySelector('.current-blog');
        const blogPicker = this.shadowRoot.querySelector('.blog-picker');

        currentBlog.addEventListener('click', () => {
            blogPicker.classList.toggle('visible');
        });

        const blogItems = this.shadowRoot.querySelectorAll('.blog-picker .blog');
        blogItems.forEach(blogItem => {
            blogItem.addEventListener('click', () => {
                // Logic to set the selected blog as the current blog goes here

                // Hide the picker
                blogPicker.classList.remove('visible');
            });
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .current-blog,
                .blog-picker .blog {
                    display: flex;
                    align-items: center;
                    padding: var(--spacing-3);
                    cursor: pointer;
                    user-select: none;
                }

                .current-blog:hover,
                .blog-picker .blog:hover {
                    background: rgba(0, 0, 0, 0.1);
                }

                .blog-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: var(--radii-1);
                    margin-right: var(--spacing-3);
                }

                .blog-info {
                    display: flex;
                    flex-direction: column;
                }

                .blog-name {
                    font-size: 15px;
                    font-weight: 700;
                }

                .blog-username {
                    font-size: 12px;
                    font-weight: 400;
                    opacity: 0.6;
                }

                .blog-picker {
                    display: none;
                    background: var(--neutral-bg);
                    color: var(--neutral-text);
                    border-radius: var(--radii-1);
                    width: var(--sidebar-width);
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 10;
                }

                .blog-picker.visible {
                    display: block;
                }
            </style>
            
            <div class="current-blog">
                <img class="blog-avatar" src="images/avatar-3.jpg" />
                <div class="blog-info">
                    <h2 class="blog-name">Sporadic Thoughts</h2>
                    <span class="blog-username">@shaunandrews</span>
                </div>
            </div>

            <ol class="blog-picker">
                <li class="blog">
                    <img class="blog-avatar" src="images/avatar-3.jpg" />
                    <div class="blog-info">
                        <h2 class="blog-name">Sporadic Thoughts</h2>
                        <span class="blog-username">@shaunandrews</span>
                    </div>
                </li>
                <li class="blog">
                    <img class="blog-avatar" src="images/avatar-1.jpg" />
                    <div class="blog-info">
                        <h3 class="blog-name">A Place To Crash</h3>
                        <span class="blog-username">@aplacetocrash</span>
                    </div>
                </li>
                <li class="blog">
                    <img class="blog-avatar" src="images/avatar-2.jpg" />
                    <div class="blog-info">
                        <h3 class="blog-name">The Spooky Skeleton</h3>
                        <span class="blog-username">@spookyskeleton</span>
                    </div>
                </li>
            </ol>
        `;
    }
}
customElements.define('fumblr-current-site', FumblrCurrentSite);


// Menu Component
class FumblrMenu extends HTMLElement {
    constructor() {
        super();

        // Attach shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');
                
                .menu {
                    user-select: none;
                }
            </style>

            <ol class="menu">
                <slot></slot>
            </ol>
        `;
    }

    connectedCallback() {
        this.addEventListener('click', (event) => {
            // Ensure we're clicking on a menu item
            if (event.target.closest('fumblr-menu-item')) {
                // Remove is-active attribute from all menu items
                this.querySelectorAll('fumblr-menu-item').forEach(item => {
                    item.removeAttribute('is-active');
                });

                // Add is-active attribute to the clicked item
                event.target.setAttribute('is-active', '');
            }
        });
    }
}
customElements.define('fumblr-menu', FumblrMenu);


// Menu Item Component
class FumblrMenuItem extends HTMLElement {
    constructor() {
        super();

        // Attach shadow root
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .menu-item {
                    display: flex;
                    color: var(--primary-text);
                    padding: var(--spacing-2) var(--spacing-3);
                    cursor: pointer;
                }

                .menu-item:hover {
                    background: rgba(0,0,0,0.2);
                }

                .menu-label {
                    flex-grow: 1;
                    opacity: 0.6;
                }

                .menu-item:hover .menu-label {
                    opacity: 1;
                }

                .menu-item.is-active .menu-label {
                    opacity: 1;
                    font-weight: 600;
                }

                .menu-highlight {
                    pointer-events: none;
                    background: var(--accent-bg);
                    color: var(--accent-text);
                    padding: 0 var(--spacing-1);
                    border-radius: var(--radii-1);
                    line-height: 100%;
                    font-size: 12px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                }

                .menu-highlight.label {
                    background: var(--primary-bg);
                    color: var(--accent-bg);
                    font-weight: 300;
                }
            </style>

            <li class="menu-item ${this.hasAttribute('is-active') ? 'is-active' : ''}">
                <span class="menu-label">${this.getAttribute('label')}</span>
                
                ${this.hasAttribute('highlight') ? `
                    <span class="menu-highlight ${this.getAttribute('highlight-type') === 'label' ? 'label' : ''}">
                        ${this.getAttribute('highlight')}
                    </span>
                ` : ''}
            </li>
        `;
    }

    updateActiveState() {
        const menuItem = this.shadowRoot.querySelector('.menu-item');
        if (this.hasAttribute('is-active')) {
            menuItem.classList.add('is-active');
        } else {
            menuItem.classList.remove('is-active');
        }
    }

    connectedCallback() {
        this.render();
        this.updateActiveState();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'is-active') {
            this.updateActiveState();
        }
    }

    static get observedAttributes() {
        return ['is-active'];
    }
}
customElements.define('fumblr-menu-item', FumblrMenuItem);


// Pinned Messages Component
class FumblrPinnedMessages extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                :host {
                    --avatar-size: 54px;
                }

                .pinned-messages {
                    padding: var(--spacing-3);
                    padding-top: var(--spacing-1);
                    display: flex;
                    gap: var(--spacing-3);
                    cursor: pointer;
                }

                .pinned-message {
                    position: relative;
                    border-radius: var(--avatar-size);
                    height: var(--avatar-size);
                    width: var(--avatar-size);
                }

                .pinned-message .unread {
                    background: var(--accent-bg);
                    color: var(--accent-text);
                    border-radius: 20px;
                    height: 14px;
                    width: 14px;
                    border: 2px solid var(--primary-bg);
                    display: block;
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    z-index: 1;
                }

                .pinned-message img {
                    display: block;
                    border-radius: var(--avatar-size);
                }

                .pinned-message:hover img {
                    transform: scale(1.1);
                }
            </style>

            <div class="pinned-messages">
                <div class="pinned-message">
                    <span class="unread"></span>
                    <img src="images/avatar-1.jpg" />
                </div>

                <div class="pinned-message">
                    <span class="unread"></span>
                    <img src="images/avatar-2.jpg" />
                </div>
            </div>
        `;
    }
}
customElements.define('fumblr-pinned-messages', FumblrPinnedMessages);


// Radar Component
class FumblrRadar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .radar {
                    padding: var(--spacing-3);
                }

                h3 {
                    font-size: 13px;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                p {
                    font-size: 13px;
                    opacity: 0.6;
                    margin-bottom: var(--spacing-3);
                }

                .mini-post {
                    background: var(--neutral-bg);
                    color: var(--neutral-text);
                    border-radius: var(--radii-2);
                }
            </style>

            <div class="radar">
                <h3>On The Radar</h3>
                <p>Every day a new post.</p>
                <div class="mini-post">
                    <fumblr-post-header
                        type="mini"
                        avatar-src="images/avatar-4.jpg"
                        display-name="${this.getAttribute('display-name')}"
                        user-name="aplacetocrash"
                    ></fumblr-post-header>
                    <img src="images/skeleton.jpg" />
                    <fumblr-post-footer
                        type="mini"
                        notes-count="3,493"
                    ></fumblr-post-footer>
                </div>
            </div>
        `;
    }
}
customElements.define('fumblr-radar', FumblrRadar);


// Post Ribbon Component
class FumblrPostRibbon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .post-ribbon {
                    /* width: 480px; */
                    display: flex;
                    gap: var(--spacing-2);
                    background: var(--neutral-bg);
                    color: var(--neutral-text);
                    border-radius: var(--radii-2);
                    padding: var(--spacing-2);
                }

                .post-type {
                    flex: 1;
                    flex-basis: 0;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: var(--spacing-1) var(--spacing-3);
                    border-radius: var(--radii-1);
                }

                .post-type:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
            </style>

            <div class="post-ribbon">
                <div class="post-type text">
                    <svg-loader data-icon="text"></svg-loader>
                    <label>Text</label>
                </div>
                <div class="post-type photo">
                    <svg-loader data-icon="camera"></svg-loader>
                    <label>Photo</label>
                </div>
                <div class="post-type quote">
                    <svg-loader data-icon="quote"></svg-loader>
                    <label>Quote</label>
                </div>
                <div class="post-type link">
                    <svg-loader data-icon="link"></svg-loader>
                    <label>Link</label>
                </div>
                <div class="post-type chat">
                    <svg-loader data-icon="message-text"></svg-loader>
                    <label>Chat</label>
                </div>
                <div class="post-type audio">
                    <svg-loader data-icon="headset-help"></svg-loader>
                    <label>Audio</label>
                </div>
                <div class="post-type video">
                    <svg-loader data-icon="video-camera"></svg-loader>
                    <label>Video</label>
                </div>
            </div>
        `;
    }
}
customElements.define('fumblr-post-ribbon', FumblrPostRibbon);


// Post Component
class FumblrPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const tags = this.getAttribute('data-tags').split(',').filter(tag => tag.trim() !== '');

        let tagsHTML = '';

        if (tags.length > 0) {
            tagsHTML = tags.map(tag => `<li><a href="#">#${tag.trim()}</a></li>`).join('');
        }

        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .post {
                    background: var(--neutral-bg);
                    border-radius: var(--radii-2);
                    border-top: 1px solid rgba(0, 0, 0, 0.8);
                    color: var(--neutral-text);
                    display: block;
                    width: 480px;
                    /* margin-bottom: var(--spacing-5); */
                }

                .post-media img {
                    display: block;
                }

                .post-content {
                    padding: var(--spacing-3);
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-3);
                }

                .post-tags {
                    opacity: 0.4;
                }

                .post-tags:hover {
                    opacity: 1;
                }

                .post-tags li {
                    display: inline;
                    /* white-space: nowrap; */
                }

                .post-tags a {
                    color: var(--neutral-text);
                    padding: 0 var(--spacing-1);
                    border-radius: var(--radii-0);
                }

                .post-tags a:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
            </style>

            <div class="post">
                <fumblr-post-header
                    avatar-src="${this.getAttribute('avatar-src')}"
                    username="${this.getAttribute('username')}"
                ></fumblr-post-header>

                <div class="post-media">
                    <img src="${this.getAttribute('media-src')}" />
                </div>
                
                <div class="post-content">
                    <p>${this.getAttribute('content-text')}</p>
                    ${tagsHTML && `
                        <ol class="post-tags">
                            ${tagsHTML}
                        </ol>
                    `}
                </div>
                
                <fumblr-post-footer
                    notes-count="${this.getAttribute('notes-count')}"
                ></fumblr-post-footer>
            </div>
        `;
    }
}
customElements.define('fumblr-post', FumblrPost);


// Post Header Component
class FumblrPostHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const type = this.getAttribute('type');

        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .post-header {
                    padding: var(--spacing-2);
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .post-header:hover {
                    background: rgba(0, 0, 0, 0.05);
                }

                .post-author {
                    display: flex;
                    align-items: center;
                    flex-grow: 1;
                    gap: var(--spacing-1);
                }

                .author-avatar {
                    height: ${type === 'mini' ? '30px' : '42px'};
                    width: ${type === 'mini' ? '30px' : '42px'};
                    margin-right: var(--spacing-1);
                    border-radius: var(--radii-1);
                }

                .author-username {
                    font-weight: 600;
                    font-size: ${type === 'mini' ? '14px' : 'initial'};
                }

                .badge {
                    height: ${type === 'mini' ? '14px' : '20px'};
                    width: ${type === 'mini' ? '14px' : '20px'};
                }

                .post-actions {
                    border-radius: var(--radii-1);
                    padding: var(--spacing-1);
                }

                .post-actions:hover {
                    background: rgba(0, 0, 0, 0.1);
                }

                .post-actions svg {
                    display: block;
                    height: 32px;
                    width: 32px;
                }
            </style>

            <header class="post-header">
                <div class="post-author">
                    <img class="author-avatar" src="${this.getAttribute('avatar-src')}" />
                    <p class="author-username">${this.getAttribute('username')}</p>
                    <img class="badge" src="images/badge-babylonian-checkmark.png" />
                    <!-- <button>Follow</button> -->
                </div>
                ${type !== 'mini' ? `
                <button class="post-actions">
                    <svg-loader data-icon="more-horiz"></svg-loader>
                </button>
                ` : ''}
            </header>
        `;
    }
}
customElements.define('fumblr-post-header', FumblrPostHeader);


// Post Footer Component
class FumblrPostFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const type = this.getAttribute('type');
        this.shadowRoot.innerHTML = `
            <style>
                @import url('reset.css');

                .post-footer {
                    margin: 0 var(--spacing-3);
                    padding: var(--spacing-3) 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                }

                button:hover {
                    background: rgba(0, 0, 0, 0.05);
                }

                .notes-button {
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    padding: var(--spacing-2) var(--spacing-3);
                    border-radius: 50px;
                }

                .icon-button {
                    padding: var(--spacing-1);
                    border-radius: var(--radii-1);
                }

                .icon-button label {
                    display: none;
                }

                .icon-button svg {
                    opacity: 0.6;
                }

                .icon-button:hover svg {
                    opacity: 1;
                }

                .post-footer.mini {
                    border-top: 0;
                    margin: 0 var(--spacing-2);
                    padding: var(--spacing-1) 0 var(--spacing-2) 0;
                }

                .post-footer.mini .icon-button svg {
                    height: 20px;
                    width: 20px;
                }
            </style>

            <div class="post-footer ${type === 'mini' ? 'mini' : ''}">
                <button class="notes-button">
                    <label>${this.getAttribute('notes-count')} notes</label>
                </button>

                <div class="button-group">
                    ${type !== 'mini' ? `
                    <button class="icon-button">
                        <label>Share</label>
                        <svg-loader data-icon="share-ios"></svg-loader>
                    </button>
                    ` : ''}

                    <button class="icon-button">
                        <label>Reply</label>
                        <svg-loader data-icon="chat-bubble-empty"></svg-loader>
                    </button>

                    <button class="icon-button">
                        <label>Reblog</label>
                        <svg-loader data-icon="refresh-double"></svg-loader>
                    </button>

                    <button class="icon-button">
                        <label>Like</label>
                        <svg-loader data-icon="heart"></svg-loader>
                    </button>
                </div>
            </div>
        `;
    }
}
customElements.define('fumblr-post-footer', FumblrPostFooter);


