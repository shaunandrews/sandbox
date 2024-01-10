class sidebarNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .sidebar-nav {}
        </style>

        <ul class="sidebar-nav">
            <sidebar-nav-item icon="dashboard" label="Home"></sidebar-nav-item>
            <sidebar-nav-item icon="explore" label="Explore"></sidebar-nav-item>
            <!-- <sidebar-nav-item icon="live" label="Live"></sidebar-nav-item> -->
            <sidebar-nav-item icon="activity" label="Activity"></sidebar-nav-item>
            <sidebar-nav-item icon="messages" label="Messages"></sidebar-nav-item>
            <sidebar-nav-item icon="inbox" label="Inbox"></sidebar-nav-item>
            <sidebar-nav-item icon="account" label="Account"></sidebar-nav-item>
            <sidebar-nav-item icon="settings" label="Settings"></sidebar-nav-item>
            <sidebar-nav-item icon="tumblrmart" label="TumblrMart"></sidebar-nav-item>
            <!-- <sidebar-nav-item icon="domain" label="Get a domain"></sidebar-nav-item> -->
            <!-- <sidebar-nav-item icon="ad-free" label="Go Ad-Free"></sidebar-nav-item> -->
        </ul>
    `;
  }
}

customElements.define("sidebar-nav", sidebarNav);

class sidebarNavItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
            .sidebar-menu-item {
                display: flex;
                align-items: center;
                gap: var(--spacing-3);
                padding: var(--spacing-2);
                opacity: 0.6;
                cursor: pointer;
                border-radius: var(--border-radius);
                transition: all 0.1s ease-in-out;
            }

            .sidebar-menu-item > * {
                outline: 1px dotted red;
            }

            .sidebar-menu-item:hover {
                opacity: 1;
                background: var(--nav-hover-bg);
            }

            .sidebar-menu-item svg {
                height: 21px;
                width: 21px;
            }
        </style>

        <li class="sidebar-menu-item ${this.getAttribute("icon")}">
            <icon-svg name="${this.getAttribute("icon")}"></icon-svg>
            <label>${this.getAttribute("label")}</label>
        </li>
    `;
  }
}

customElements.define("sidebar-nav-item", sidebarNavItem);
