export class GameChart extends HTMLElement {
    constructor () {
        super();
        this._values = [];
        this._color = '#ff0000';
        this._displayStyle = 'horizontal';
    }

    static get baseUnit () {
        return 16;
    }
    // this allows GameChart to listen for dom attribute changes and call
    // attributeChangedCallback when the attribute changes in DOM
    static get observedAttributes () {
        return ['data-values', 'data-color', 'data-display-style'];
    }

    _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }

    /**
     * define custom getters and setters to handle update on value changes
     * accoridngly through JavaScript call
     */
    get values () {
        return this._values;
    }
    set values (val) {
        this._values = val;
        this.handleChange();
    }
    get color () {
        return this._color;
    }
    set color (val) {
        this._color = val;
        this.handleChange();
    }
    get displayStyle () {
        return this._displayStyle;
    }
    set displayStyle (val) {
        this._displayStyle = val;
        this.handleChange();
    }

    connectedCallback () {
        // upgrade property so that the es6 setter can be called properly
        ['colors', 'values', 'displayStyle'].forEach(p => {
            this._upgradeProperty(p);
        });
        // TODO: call render method :)
    }

    handleChange() {
        // TODO: handle update and re-render
    }

    attributeChangedCallback () {
        // TODO: get attributes from dataset and re-render accordingly
    }

    render () {
        // TODO: render chart DOM
        // note: the bar should display in *reverse* order of the values
    }
}

