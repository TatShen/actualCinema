import { appGeners } from "../../../constants/appGeners";
import { Component } from "../../../core";
import "./subNavigation.scss";

class SubNavigation extends Component {
  constructor(){
    super();
    this.state = {
      activGenre: appGeners[0].value
    }
  }

  render() {
    return `
      <div class="sub-navigation">
        <ul>
            ${appGeners.map((item) => {
              const isActiv = this.state.activGenre === item.value? 'active' : ''
              return `
                <li> <a href="#" data-genre="${item.value}">${item.label}</a></li>
              
              `
            })
          .join('')}
        </ul>

        <div class="search">
            <form action="#" method="get" accept-charset="utf-8">
                <label for="search-field">SEARCH</label>
                <input
                    type="text"
                    name="search field"
                    value="Enter search here"
                    id="search-field"
                    class="blink search-field"
                />
                <input type="submit" value="GO!" class="search-button" />
            </form>
        </div>
    </div>
    `;
  }
}

customElements.define("sub-navigation", SubNavigation);
