import { Component } from "../../../core";
import "../../maleculas";
import "../../atoms";
import { initialFieldsState } from "./initialFieldsState";
import { FormManager,Validator } from "../../../core";
import {authService} from '../../../services/Auth'
import { appRoutes } from "../../../constants/appRoutes";
import { appEvents } from "../../../constants/appEvents";

export class SingIn extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new FormManager();
  }

  toggleisLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  signIn = (data) => {
    this.toggleisLoading();
    authService
      .signIn(data.email, data.password)
      .then((user) => {
        authService.user = user;
        this.dispatch(appEvents.userAuthorized);
        this.dispatch(appEvents.changeRoute, { target: appRoutes.home })
        ;
        
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(() => {
        this.toggleisLoading();
        
      });
  };

  validateForm = (evt) => {
    if (evt.target.closest("it-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          Validator.email("Email is not valid"),
          Validator.required("The field should not be empty"),
        ],
        password: [Validator.required("The field should not be empty")],
      });
    }
  };

  validate = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...evt.detail,
        },
      };
    });
  };

  componentDidMount() {
    this.addEventListener("click", this.validateForm);
    this.addEventListener(appEvents.validateControls, this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.signIn));
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
        <oc-preloader is-loading = "${this.state.isLoading}">
            <form class="mt-5 registration-form">
            <oc-input 
                type="E-mail"
                label="E-mail"
                control-name="email"
                value="${email.value}"
                is-valid="${email.isValid}"
                is-touched="${email.isTouched}"
                error-message="${email.errors?.message}" 
            ></oc-input>

            <oc-input 
                type="Password"
                label="Password"
                control-name="password"
                class-name = "firs-pass"
                value="${password.value}"
                is-valid="${password.isValid}"
                is-touched="${password.isTouched}"
                error-message="${password.errors?.message}" 
            ></oc-input>
            <button type="submit" class="btn btn-primary">Sign up</button>
            </form>
        </oc-preloader>
        
        `;
  }
}
customElements.define("oc-sing-inpage", SingIn);
