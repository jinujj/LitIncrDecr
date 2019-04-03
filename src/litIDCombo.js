import { LitElement, html, css } from 'lit-element';

export default class LitIDCombo extends LitElement {

    static get styles() {
        return css`
            :host {
                text-align: center;
                color: maroon;
            }
            .counter-container-with-label {
                display: flex;
                padding:15px;
            }
            .counter-container-with-label > * {
                margin: 10px 0;
            }
            .counter-container-with-label span {
                width: 60%;
                font-size: 1rem;
            }
            .counter-container {
                display:flex;
                flex: nowrap;
                width:100px;
                height: 30px;
            }
            .counter-container button {
                width: 30%;
                background: #e4e4e4;
            }
            .counter-container button.left {
                border-radius: 5px 0 0 5px;
            }
            .counter-container button.right{
                border-radius: 0 5px 5px 0;
            }
            .counter-container button:focus,button:hover{
                background: #a0a0a0;
            }
            .counter-container input{
                width:40%;
                text-align: center;
            }`;
    }

    static get properties() {
        return {
            property: { type: String },
            label: {type: String},
            negative: {type: Boolean},
            value: {type: Number}
        };
    }

    constructor() {
        super();
        this.value = 3;
        this.negative = false;
    }

    /**
     * Attach the custom event listeners for rendering the side navigation.
     */
    _attachListener() {
        // Added the custom Event Listener
        this.addEventListener(`side-nav-toggle`, (data) => {
            this._renderNavigation();
        });
    }


    render() {
        return html`
            <div class="counter-container-with-label" property=${this.property}>               
                ${this.label ? html`<span>${this.label}</span>` : html``}
                <div class="counter-container">
                    <button class="left increment">+</button>
                    <input type=text value=${this.value}>
                    <button class="right decrement">-</button>
                </div>
            </div>`;
    }
}

customElements.define("lit-combo", LitIDCombo);