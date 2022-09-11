import React from "react"
import audi from "../Images/AUDI Q5.jpeg"
import urus from "../Images/urus.jpeg"
import toyota from "../Images/toyota.jpeg"
import bmw from "../Images/BMW.jpeg";
import dodge from "../Images/dodge.jpeg"
import ford from "../Images/ford.jpeg"
function Home(){
    return(
        <div className="about">
            <h1>Venom car yard.</h1>
            <header>About us</header>
            <p>We are a car yard located in Ngong road,Kenya.We deal with various types of cars eg :
                <ul>
                    <aside><li>AUDI</li> <img src={audi} alt="" /></aside>
                    <aside><li>Lamborghini</li><img src={urus} alt=""/></aside>
                    <aside><li>Toyota</li><img src={toyota} alt="" /></aside>
                    <aside><li>BMW</li><img src={bmw} alt=""/></aside>
                    <aside> <li>DODGE</li><img src={dodge} alt=""/></aside>
                    <aside><li>FORD</li><img src={ford} alt=""/></aside>
                </ul>
                <p>We have been serving Kenyans gracefully for 23 years now!</p>
            </p>
            <div className="bio">
                <div className="kichwandogo">
                    <header>To use this site follow the following instructions</header>
                    </div>
                    <div className="picha">
                    <p>
                        <ul>
                            <li>1.read tis instructions to know how to navigate</li>
                            <li>2.Fill in the custumer form so as to shop in our site</li>
                            <li>3.Proceed to our hub and select car or cars of choice and add them to our cart</li>
                            <li>4.Proceed to our cart and confirm the items that you are shopping for and submit the cart for delivery.</li>
                        </ul>
                        </p>
                    </div>
            </div>
        </div>    
        )
    }
    export default Home