import React, { Component } from "react"
import './Body.css'
// import bdyimg from './images/bg.jpg'
import Header from './Header'
import Footer from './Footer'
class Body extends Component {
    state = {
    
    };
    render() {
        return (
            <div id='head'>
                <Header />
                <div className='bdyimg'>

                   <div className='headboy'>
                  <div className='bdytxt'>
                    <h1 className='bdyhd'>Learn on your schedule</h1>
                            <h3 className='bdyhd'>Anywhere,anytime.Enjoy risk-free with our 30-day,money-<br /><span>back guarantee.</span></h3>
                    <div id='searchbody'>        
                            <input type='text' placeholder='what do you want to learn' className='bodyinp' />
                                <i id='bdysearch' class="fas fa-search" style={{ fontSize: '20px' }} ></i>
                                </div>
                  </div>
                        </div> 
                </div>
                <Footer/>
            </div>

        )
    }
}
export default Body;