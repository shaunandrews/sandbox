class readerItem extends HTMLElement {
  _data = null;

  constructor() {
    super();
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", () => {
      const readerItem = this.querySelector(".reader-item");
      if (readerItem) {
        // Clone the reader-item element
        const clonedReaderItem = readerItem.cloneNode(true);

        // Get the bounding rectangle of the reader-item element
        const rect = readerItem.getBoundingClientRect();

        // Position the cloned reader-item element
        clonedReaderItem.style.position = "fixed";
        clonedReaderItem.style.top = `${rect.top}px`;
        clonedReaderItem.style.left = `${rect.left}px`;

        // Append the cloned reader-item element to the body
        document.body.appendChild(clonedReaderItem);

        // After a delay, add the full-screen class to the cloned element
        setTimeout(() => {
          clonedReaderItem.classList.add("full-screen");
        }, 100);

        // When the cloned element is clicked, it scales back to the initial size and then disappears
        clonedReaderItem.addEventListener("click", () => {
          clonedReaderItem.classList.remove("full-screen");
          setTimeout(() => {
            document.body.removeChild(clonedReaderItem);
          }, 500); // same duration as the transition
        });
      }
    });
  }

  render() {
    // Grab all the media and create a string of HTML
    let mediaHTML = this.data.media
      .map((media) => {
        return `<img src="${media.src}" alt="${media.alt}" />`;
      })
      .join("");

    this.innerHTML = `
        <style>
          .reader-item {
            position: relative;
            display: flex;
            flex-direction: row-reverse;
            gap: var(--spacing-4);
            background: white;
            padding: var(--spacing-2);
            border-radius: var(--border-radius-1);
            box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
            transition: 0.5s ease-in-out;
            top: auto;
            left: auto;
            width: auto;
            height: auto;
          }

          .reader-item:hover {
            /* transform: scale(1.0075); */
            box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.08);
          }

          .full-screen {
            position: fixed !important;
            top: 48.5px !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            transition: all 0.5s ease-in-out;
          }

          .reader-item__header {
            display: flex;
            align-items: center;
            gap: var(--spacing-1);
          }

          .reader-item__source-image {
            height: 20px;
            width: 20px;
            border-radius: var(--border-radius-05);
          }

          .reader-item__source {
            display: flex;
            /* flex-direction: column; */
            align-items: center;
            gap: var(--spacing-05);
            line-height: 1;
            font-size: 13px;
          }

          .reader-item__source-title {
            font-weight: 600;
            
          }

          .reader-item__source-date {
            font-weight: 300;
          }

          .reader-item__media {
            /* flex-grow: 1; */
            width: 220px;
            position: relative;
            /* transform: scale(0.9); */
          }

          .reader-item__media img {
            max-height: 100%;
            /* width: 100%; */
            /* display: block; */
            /* object-fit: cover; */
            
            position: absolute;
            top: 0;
            right: 0;
            border-radius: var(--border-radius-05);
            border-top: 1px solid rgba(255,255,255,0.8);
            box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.25);
            transition: 0.15s ease-in-out;
          }

          .reader-item__media:hover img {
            zoom: 1.05;
          }

          .reader-item__media img:nth-child(1) {
            transform: rotate(3deg);
          }

          .reader-item__media img:nth-child(2) {
            transform: rotate(-4deg);
          }

          .reader-item__media img:nth-child(3) {
            transform: rotate(6deg);
          }

          .reader-item__media:hover img:nth-child(1) {
            transform: rotate(-1deg);
          }

          .reader-item__media:hover img:nth-child(2) {
            transform: rotate(3deg);
          }

          .reader-item__media:hover img:nth-child(3) {
            transform: rotate(-4deg);
          }

          .reader-item__content {
            width: calc(100% - 220px);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-1);
          }

          .reader-item__title {
            font-size: 30px;
            font-weight: 600;
            line-height: 1.2;
          }

          .reader-item__pullquote {
            font-size: 24px;
            font-weight: 500;
            line-height: 1.4;
          }

          .reader-item__body {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        </style>

        <div class="reader-item">
          <div class="reader-item__media">
            ${mediaHTML}
          </div>

          <div class="reader-item__content">
            <div class="reader-item__header">
              <img class="reader-item__source-image" src="${this.data.sourceImage}" alt="${this.data.sourceName}" height="48" width="48" />
              <div class="reader-item__source">
                <span class="reader-item__source-title">${this.data.sourceName}</span>
                &bull;
                <span class="reader-item__source-date">${this.data.time}</span>
              </div>
            </div>

            <h3 class="reader-item__title">${this.data.title}</h3>

            <p class="reader-item__pullquote">${this.data.pullquote}</p>
            
            <div class="reader-item__body">
              <p>${this.data.bodyText}</p>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("reader-item", readerItem);
