import React, { Component } from "react"
import './Body.css'
import bodypic from './images/bg.jpg'
import Header from './Header'
class Body extends Component {
    state = {
    
    };
    render() {
        return (
            <div>
                <Header />
              <img src={bodypic} alt='#bdypic'/>
            </div>
        )
    }
}
export default Body;