import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class LitCounter extends LitElement {
    static properties = {
        count: {},
    }

    static styles = css`
    button {
        color: var(--my-color)
    }
    `

    constructor() {
        super();
        this.count = 0;
    }
    firstUpdated() {
        console.log('updated')
    }
    render() {
        return html`<button @click=${()=>this.count++}>${this.count}</button>`
    }
}
 
customElements.define('lit-counter',LitCounter);

class MyElement extends LitElement {
    static properties = {
      version: {},
    };
  
    constructor() {
      super();
      this.version = 'STARTING';
    }
  
    render() {
      return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
      `;
    }
}
customElements.define('my-element', MyElement);




class MyDiv extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                div{
                    width:100px;height:100px;background:green;
                }
            </style>
            <div>
                <slot></slot>
            </div>
        `
    }
}

class Counter extends HTMLElement {
    static get observedAttributes() {
        return ['count'];
    }

    get count() {
        return this.getAttribute('count') || 0;
    }
    set count(count) {
        this.setAttribute('count',count)
    }

    attributeChangedCallback(attr,oldVal,newVal) {
        if(attr == 'count') {
            this.btn.textContent = newVal;
        }
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <button>${this.count}</button>
        `
        this.btn = this.shadowRoot.querySelector('button');
        this.btn.addEventListener('click', ()=> {
            this.count++;
        })
    }
}

customElements.define('my-div',MyDiv);
customElements.define('my-counter',Counter);