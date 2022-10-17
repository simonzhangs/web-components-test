class PopUpInfo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('span');
        wrapper.setAttribute('class','wrapper');

        const icon = document.createElement('span');
        icon.setAttribute('class','icon');
        icon.setAttribute('tabindex',0);

        const info = document.createElement('span');
        info.setAttribute('class','info');

        const text = this.getAttribute('data-text');
        info.textContent = text || '此组件未添加 text 属性';

        let imgUrl;
        const url = this.getAttribute('img');
        if(url) {
            imgUrl = url;
        }else {
            imgUrl = 'https://raw.githubusercontent.com/mdn/web-components-examples/main/popup-info-box-web-component/img/default.png';
        }

        const img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                position:relative;
            }

            .info {
                font-szie: 0.8rem;
                width: 200px;
                display: inline-block;
                border: 1px solid black;
                padding: 10px;
                background: white;
                border-radius: 10px;
                transition: .6s all;
                opacity: 0;
                position:absolute;
                top: 20px;
                left: 1opx;
                z-index: 3;
            }

            img {
                width: 1.2rem;
            }

            .icon:hover + .info,
            .icon:focus + .info {
                opacity: 1;
            }

            
            
        `
        
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define('popup-info',PopUpInfo)