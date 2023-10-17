import React, {useState} from 'react';

import theme3 from "../../Coffe-img/theme3.png";
import logo from "../../Coffe-img/logo.png";
import "../../css/contact.css"; 

export const Contact = () => {
    return (
        <>
        <div  className="img-prin" 
          style={{
          backgroundImage: `url(${theme3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}>
        <div className="title-contact">
            <h2 className="titleh2">CONTACT US</h2>
            <br />
            <br />
        </div>
        <div className="container">
            <div className="content">
              <div className="content-info">
                <h2>INFORMATION</h2>
                <hr />
                <ul>
                  <li>
                    <i className="fa fa-envelope"></i> TuCafé
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>Tucumán - Argentina
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +54 381######
                  </li>
                </ul>
                <hr />
                <p>If you want to ask about something, please contact the number above. We serve every day.</p>
                <p>tucafe@gmail.com</p>
                <hr />
              </div>
            </div>
        </div>
        <div className="divimagen">
        <img className="imagen" src={logo} alt="Fondo" />
        </div>
        </div>
        </>
      );
    };