import * as core from "../../../core";
import { appRoutes } from "../../../constants/appRoutes";
import { authService } from "../../../services/Auth";
import { appEvents } from "../../../constants/appEvents";

export class Nav extends core.Component {
  constructor() {
    super();
    this.state={
      activLink : window.location.pathname
    }
  }

  onClick = (evt) => {
    if (evt.target.closest(".sing-out-link")) {
      console.log('out');
      evt.preventDefault();
      this.dispatch(appEvents.userLoggedOut);
    }
  };

  activLink = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        activLink
      }
    })

  }

  componentDidMount() {
    this.addEventListener("click", this.onClick);
    this.addEventListener(appEvents.changeRoute, this.activLink)
  }

  static get observedAttributes() {
    return ["out"];
  }

  render() {
    const { out } = this.props;
     console.log(this.state.activLink);
    return `
        <div id="navigation">
          <ul>
            <li>
              <oc-link  to="${appRoutes.home}">
                <span class="activ link">HOME</span>
              </oc-link>
              
            </li>
          
          
           
            ${
              JSON.parse(out)
                ? 
                
                `
                <li>
                <oc-link  to="${appRoutes.home}">
                <span class="link sing-out-link">Sing Out</span>
                </oc-link>
              </li>
              <li>
              <oc-link  to="${appRoutes.admin}">
              <span class="link">ADMIN</span>
            </oc-link>
            </li>
            ` : 
            `
            <li>
              <oc-link  to="${appRoutes.signUp}">
              <span class="link">Sing Up</span>
              </oc-link>
            </li>

            <li>
              <oc-link  to="${appRoutes.signIn}">
              <span class="link">Sing In</span>
              </oc-link>
            </li>
            `
            }
           
           
          </ul>
        </div>
        
        `;
  }
}

customElements.define("oc-nav", Nav);
