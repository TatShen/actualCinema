import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core";
import { authService } from "../../../services/Auth";
import { FormManager } from "../../../core";
import {storageService} from '../../../services/Storage'
import { Database, databasrService } from "../../../services/database/Database";
import { appEvents } from "../../../constants/appEvents";


export class Admin extends Component{
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
    this.form = new FormManager();
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  createMovie = (data) => {
    this.toggleIsLoading();
    console.log(data);
    storageService.uploadPoster(data.poster)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          databasrService.create('movie', {
          ...data,
          poster : url
        })  
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        console.log('ofof');
      })
  }

  componentDidMount() {
    this.form.init(this.querySelector('.send-data'), {})
    this.addEventListener('submit', this.form.handleSubmit(this.createMovie))
    if (!authService.user) {
      this.dispatch(appEvents.changeRoute, {
        target: appRoutes[this.props.path ?? "signUp"],
      });
    }
  }
    
      render() {
        return `
        <it-preloader is-loading="${this.state.isLoading}">
        <div class="container mt-5">
          <h1>AdminPage</h1>
          <div class="row">
            <div class="col-12">
              <form>
                <div class="mb-3">
                  <label class="form-label">Type movie name</label>
                  <input class="form-control" type="text" name="title">
                </div>
                <div class="mb-3">
                  <label class="form-label">Movie rating</label>
                  <input class="form-range" type="range" name="rating" min="0" max="5" step="0.5">
                </div>
                <div class="mb-3">
                  <label class="form-label">Upload a poster</label>
                  <input class="form-control" type="file" id="formFile" name="poster">
                </div>
                <div class="mb-3">
                  <label class="form-label">Chose a genre</label>
                  <select class="form-select" name="genre">
                    <option selected value="action">Action</option>
                    <option value="horror">Horror</option>
                    <option value="drama">Drama</option>
                    <option value="comedy">Comedy</option>
                    <option value="fantasy">Fantasy</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                  <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
              </form>
            </div>
          <div>
        </div>
        </it-preloader>
        
        `;
      }
}
customElements.define('oc-adminpage', Admin)