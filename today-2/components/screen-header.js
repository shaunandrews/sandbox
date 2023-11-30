// Component: Function Header
// ------------------------------
class FunctionHeader extends HTMLElement {
  static get observedAttributes() {
    return ["title", "description"];
  }

  constructor() {
    super();

    // Grab the template
    const template = document.getElementById("templateFunctionHeader");
    const content = document.importNode(template.content, true);

    // Append the template directly to the component
    this.appendChild(content);

    // Initialize default state
    this.titleElement = this.querySelector(".functionHeaderTitle"); // Assuming these classes exist in your template
    this.descriptionElement = this.querySelector(".functionHeaderDescription");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title":
        this.titleElement.textContent = newValue;
        break;
      case "description":
        this.descriptionElement.textContent = newValue;
        break;
    }
  }
}

customElements.define("function-header", FunctionHeader);

export default FunctionHeader;
