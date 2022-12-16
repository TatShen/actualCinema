import { Component } from "../../../core";

export class Apptemplate extends Component{
   constructor(){
    super();
    this.isShadow = true
   }
   
    render (){
        return `
        <oc-header></oc-header>
        <main id="main">
            <slot></slot>
        </main>
        <oc-footer></oc-footer>
        `
    }
}