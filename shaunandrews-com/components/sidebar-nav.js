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
            .sidebar-nav {
              background: rgba(0,0,0,0.5);
            }
        </style>

        <ul class="sidebar-nav">
            <sidebar-nav-item icon="home" label="Home"></sidebar-nav-item>
            <sidebar-nav-item icon="user" label="About"></sidebar-nav-item>
            <sidebar-nav-item icon="briefcase" label="Portfolio"></sidebar-nav-item>
            <sidebar-nav-item icon="file" label="Resume"></sidebar-nav-item>
            <sidebar-nav-item icon="cog" label="Sandbox"></sidebar-nav-item>
            <sidebar-nav-item icon="envelope" label="Contact"></sidebar-nav-item>
            <sidebar-nav-item icon="github" label="Blog"></sidebar-nav-item>
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

            .sidebar-menu-item:hover {
                opacity: 1;
            }
        </style>

        <li class="sidebar-menu-item ${this.getAttribute("icon")}">
            <!-- <icon-svg name="${this.getAttribute("icon")}"></icon-svg> -->
            <label>${this.getAttribute("label")}</label>
        </li>
    `;
  }
}

customElements.define("sidebar-nav-item", sidebarNavItem);
