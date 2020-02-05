import React, { Component } from "react"
import './Header.css'
import logo from './images/ulogo.png';
import hiro from './images/hiroshima-metro-logo.svg';
import magnify from './images/magnifying-glass.svg';
import cart from './images/cart.png';

class Header extends Component{
    state = {
    
    };
    render() {
        return (
            <div className='container'>
                
                <div id='udemylogo'>
                 <img src={logo} alt='logo' id='logo' />
                </div>
                <div id='cate'>
                     <img src={hiro} alt="hiro" id='hiros' />
                     <a id='heda' href="#categories">categories</a>
                </div>

                 <div id="inp">
                    <input id="form1" type="text" placeholder="search for anything" />
                    <div id='searchdiv'>
                        <img id="mag" src={magnify} alt="mag" />
                        </div>
                </div>

                <div id="udemybiz">
                <a id='heda' href="#udemybiz">udemy for business</a>
                </div>

                  <div id="techy">
                   <a id="heda" href="#tech">tech on udemy</a>
                </div>
                
                <div id="cart">
                <img src={cart} alt="#cart"/>
                <a id="log" href="#log">log In</a>
                <a id="log" href="#log">sign up</a>
            </div>
            </div>
            
            
        )
    }
}
export default Header;