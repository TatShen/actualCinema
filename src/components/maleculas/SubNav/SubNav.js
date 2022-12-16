import { Component } from "../../../core";
import '../../atoms'


export class Subnav extends Component{
    constructor(){
        super()
    };

    render(){
        return `
        <div id="sub-navigation">
          <oc-list></oc-list>
          <oc-form></oc-form>
        </div> 
        
        `
    }
}

customElements.define('oc-subnav', Subnav)