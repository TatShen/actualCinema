import { Component } from "../../../core";
import "./card.scss";
import '../../../core'

import { appRoutes } from "../../../constants/appRoutes";

export class Card extends Component {
  constructor() {
    super();
  };

  static get observedAttributes() {
    return ["title", "id", "reating", "poster", "comments"];
  };
 

  componentDidMount(){
   
  }


  render() {
    const { title, id, reating, poster, comments } = this.props;
    return `
      <div class="movie">
          <div class="movie-image"> 
            <span class="play">
              <span class="name">${title}</span>
            </span> 
            <oc-link to="${appRoutes.movie}/${id}">
            <img src="${poster}" alt="" /></a> 
            </oc-link>
          </div>
        <div class="rating">
          <p>RATING</p>
          <div class="stars">
            <div class="stars-in"> </div>
          </div>
          
        </div>
      </div>
    `;
  }
};

customElements.define("oc-card", Card);
