import { Component } from "../../../core";

export class MoviePage extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return `
        
        <h1>MOVIE</h1>
        
        `
    }
}

customElements.define('movie-page', MoviePage)