import React, { Component } from "react"
import './Header.css'
import logo from './images/ulogo.png';
import hiro from './images/hiroshima-metro-logo.svg';
// import magnify from './images/magnifying-glass.svg';
import '../fontawesome-free-5.12.1-web/css/all.css'
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
                     <div class="sub-menu2">
                       <ul>
                        
                        <li>Development</li>
                        <li>Business</li>
                        <li>Finance & Accounting</li>
                        <li>IT & Software</li>
                        <li>Office Productivity</li>
                        <li>Personal Development</li>
                        <li>Design</li>
                        <li>Marketing</li>
                        <li>Life Style</li>
                        <li>Photography</li>
                        <li>Health & fitness</li>
                        <li>Music</li>
                        <li>Teaching & Academics</li>
                       </ul>
                   
                </div>
             
             </div>
        

                 <div id="inp">
                    <input id="form1" type="text" placeholder="search for anything" />
                        <div id='searchdiv'>
                          <i id='headicon'class="fas fa-search" style={{fontSize:'20px'}} ></i>
                        </div>
                </div>

                <div id="udemybiz">
                    <a id='heda' href="#udemybiz">udemy for business</a>
                    <div class="sub-menu">
                        <i id="sort" class="fas fa-sort-up"></i>
                    <p>Get your team access to 3500+ top<br/>Udemy courses anytime, anywhere</p>
                    <a href="#udemy">Try udemy for Business</a>
                </div>
                </div>

                    
                <div id="techy">
                    
                    <a id="heda" href="#tech">tech on udemy</a>
                    <div  class="sub-menu1">
                        <i id="sort" class="fas fa-sort-up"></i>
                    <p>Turn what you know into an opportunity<br/>and reach millions around the world.</p>
                    <a href="#learnmore">learn more</a>
                </div>
            </div>
                
                <div id="cart">
                        
                    <div id="dropcat">  


                        <img id="cat" src={cart} alt="#cart" />
                        <div id="cart-sub">
                    <i id="sort" class="fas fa-sort-up"></i>
                            <p>Your cart is empty</p>
                            <a href="#keep shopping">Keep Shopping</a>
                        </div>
                        </div>
                    
                 <a id="log" href="#log">log In</a>
                        <a id="log1" href="#log">sign up</a>
                </div>
            </div>
            
            
        )
    }
}
export default Header;