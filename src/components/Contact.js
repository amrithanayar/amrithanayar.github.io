import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import {MdEmail} from "react-icons/md"
import {FaGithub, FaTwitter, FaInstagram} from "react-icons/fa"

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>Hit me up.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h2>
                I'm always open to<br></br>
                <span className='amazing-color'>new opportunities</span></h2>

                <div className = 'contact-div' > <a className = 'contact-link'  href={`mailto:${data.contactEmail}`} ><MdEmail color = "black" /></a></div>
                <div className = 'contact-div'><a className = 'contact-link' href="https://github.com/amrithanayar"><FaGithub color = "black"/></a></div>
                <div className = 'contact-div'><a className = 'contact-link' href = "https://twitter.com/amritha_nayar"><FaTwitter color = "black"/></a></div>
                <div className = 'contact-div'><a  className = 'contact-link'href= "https://www.instagram.com/amrithanayar/"><FaInstagram color = "black"/></a></div>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a >Amritha Nayar</a></span>
        </div>);
    }
}
 
export default Contact;