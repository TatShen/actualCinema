import { Component } from "../../../core";

export class Error extends Component{
    render(){
        return `
        <h1>Error PAGE</h1>
        
        `
    }
}
customElements.define('oc-errorpage', Error)