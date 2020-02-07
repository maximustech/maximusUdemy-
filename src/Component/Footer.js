import React, { Component } from 'react'
import './Footer.css'
import pic1 from './images/ft1.png'
import pic2 from './images/ft2.png'
import pic3 from './images/ft3.png'
class Footer extends Component{
    State = {
        
    };
    render() {
        return (
            <div >
                <div id='footerbdy'>
                   
                    <div id="foot1">
                   <div>
                            <img id='image' src={pic1} alt="foot1" />
                    </div>
                    <div id="write">
                       <span>10,000 online courses</span>
                        <span>Explore a variety of fresh topics</span>
                    </div>
                    </div>
{/* -------------------------footer second image------------------------------ */}
                    <div id="foot1">
                        <div>
                            <img id='image' src={pic2} alt="ftpg2" />
                            </div>
                  <div id="write">
                    <span>Expert instruction</span>
                    <span>find the right instructor for you</span>
                  </div>
                    </div>
{/* -----------------------------third image----------------------------------------                     */}
                  
                    <div id="foot1">
                        <div>
                            <img id='image' src={pic3} alt="ftpg" />
                         </div>
                <div id="write">
                    <span>Lifetime access</span>
                    <span>Learn on your schedule</span>
                </div>
            </div>



                </div>
            </div>
        )
    }
}
export default Footer;