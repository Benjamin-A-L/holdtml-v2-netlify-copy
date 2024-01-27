import * as React from "react"
import '@fontsource/rubik'
import './styles.css'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components"
import { NavBar, NavBarMobile } from "./navbar";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"


export const LogoStyled = styled.div`
    font-size: 46px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
    justify-self: center;
`

export const Logo = () => {
  return <LogoStyled><b>&lt;H</b><span style={{ color: 'rgb(241, 151, 32)' }}>old</span><b>TML/&gt;</b></LogoStyled>
}

const IndexPage = () => {
  return (
    <main>
      <NavBar></NavBar>
      <NavBarMobile></NavBarMobile>
      <section className="header-section">
        <div className='header-container'>
          <h1>the access to the digital era for your business</h1>
          <div class="header-cta-container">
            <p>sign up for a free call to chat with us</p>
            <button onClick={()=>scrollTo('.booking-section')}>take me there</button>
          </div>
          <div className='header-image'>
            <StaticImage id='header-img' src='../images/Designer.jpeg'></StaticImage>
          </div>
        </div>
      </section>


      <section className="help-section">
        <div class="how-container">
        
          <h1>How we can benefit your company</h1>
            <p className='how-paragraph-1'>We make websites to help your potential customers find out about your business, and become recurrent.</p>
            <p className='how-paragraph-2'>our area of expertiese is making fast and pretty websites, that you can easily edit without needing to learn code</p>
          <div className="how-we-do-it-explanation">
            <div className="gatsby-container">
              <p><a href='https://gatsbyjs.com' target='_blank'>gatsby</a> is a static site generator, that we use to build your website, this means that all of its static content is served almost instantaniusly</p>
              <a href='https://gatsbyjs.com' target='_blank'>
                <StaticImage className='icon' src='../images/icon.png'></StaticImage>
              </a>
            </div>
        
            <div className='prismic-container'>
              <a href='https://prismic.io' target='_blank'>
                <StaticImage className='icon' src='../images/prismic-logo.png'></StaticImage>
              </a>
              <p>we integrate <a href='https://prismic.io' target='_blank'>prismic</a> into your website, so that its content can be easily be edited without you needing to hire any aditional web developers, or learning how to code</p>
            </div>
        
          </div>
        
          <div className="insights-results"></div>
        </div>
      </section>
      
      
      <section className="booking-section">
        <h2>book a free call, so we can figure out if this is for you</h2>
      </section>

      <footer>
        <div className="social-media">
          <a target='_blank' href="https://instagram.com/benjamin_astudilloloyer/" className="instagram sm-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a target='_blank' href="https://facebook.com/benjamin.holdtml" className="facebook sm-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a target='_blank' href="https://linkedin.com" className="linkedin sm-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
