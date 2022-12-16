import { Component } from "../../../core";

export class Form extends Component{
    constructor(){
        super()
    };

    render(){
        return `
        <div id="search">
            <form action="#" method="get" accept-charset="utf-8">
              <label for="search-field">SEARCH</label>
              <input type="text" name="search field" value="Enter search here" id="search-field" class="blink search-field"  />
              <button type="submit"class="search-button">GO</button>
            </form>
          </div>
        `
    }
}

customElements.define('oc-form', Form)