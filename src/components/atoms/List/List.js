
import { Component } from "../../../core";

export class List extends Component{
    constructor(){
        super()
    };

    render(){
        return `
        <ul>
            <li><a href="#">SHOW ALL</a></li>
            <li><a href="#">LATEST TRAILERS</a></li>
            <li><a href="#">TOP RATED</a></li>
            <li><a href="#">MOST COMMENTED</a></li>
            <li>
                <select>
                    <option>Action</option>
                    <option>Horror</option>
                    <option>Drama</option>
                    <option>Comedy</option>
                    <option>Fantasy</option>
                </select>
            </li>
          </ul>
        
        `
    }
}

customElements.define('oc-list', List)