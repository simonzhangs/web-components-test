class WordCount extends HTMLParagraphElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const icon = document.createElement('span');
        icon.setAttribute('class','icon');
        icon.setAttribute('tabIndex',0);

        const text = this.getAttribute('text');
        icon.textContent = text || '此 web component 上没有 text 属性';

        const style = document.createElement('style');
        style.textContent = `
         .icon {
            color: blue;
         }
        `;

        shadow.appendChild(style);
        shadow.appendChild(icon);

    }
}

customElements.define('word-count',WordCount, {extends: 'p'});