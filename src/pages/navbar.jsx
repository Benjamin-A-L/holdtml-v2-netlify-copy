import React from 'react';
import { Logo } from './index.js';
import styled from "styled-components"
import { Link } from 'gatsby';
import scrollTo from "gatsby-plugin-smoothscroll"

const SideHandler = () =>{
    const target = document.querySelector('#nav-mobile-container');
    target.classList.toggle('side-nav-on');
} 

const SideLinkHandler = (target) => {
    SideHandler();
    scrollTo(target);
  };

export const NavWrapper = styled.nav`
    // border-bottom: solid 6px rgb(0, 0, 0, 0.1);
    border-bottom: solid 3px rgb(241, 151, 32, 0.1);
    // box-shadow: 0px 0px 1000px 1px ;
    box-shadow: 0px 0px 1000px 1px rgb(241, 151, 32);
    background-color: white;

    padding: 0.6rem;
    
    display: grid;
    grid-template-columns: auto auto;
    position: sticky;
    top: 0;
    z-index: 4;

    .logo-link{
        justify-self: left;
        cursor: pointer;
        border: none;
        background: none;
        border-radius: 10px;
        transition: 0.8s;
    }
    .logo-link:hover{
        box-shadow: 0px 0px 1000px 1px rgb(241, 151, 32);
        background-color: rgb(241, 151, 32, 0.14);
    }
    .nav-btn-container{
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 1rem;
        justify-self: right;
        align-items: center;
        margin-right: 1rem;
    }
    .nav-btn{
        background-color: rgb(241, 151, 32);
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        padding: 0.4rem;

        cursor: pointer;
        transition: 0.4s;
    }
    .nav-btn:hover{
        background-color: black;
    }

    @media(max-width: 820px){
        grid-tmplate-columns: auto;
        justify-content: right;

        .nav-link-btn{
            display: none;
        }

        .side-nav-btn{
            display: block;
            cursor: pointer;
            border: none;
            background-color: transparent;
        }
        .side-icon-container{
            display: grid;
            width: 50px;
            grid-template-rows: repeat(3, auto);
            gap: 6px;
            background-color: transparent;
        }
        .oval{
            background-color: transparent;
            border: solid black 3px;
            // border-radius: 5px;
            border-top-left-radius: 24% 100%;
            border-top-right-radius: 24% 100%;
            border-bottom-left-radius: 24% 100%;
            border-bottom-right-radius: 24% 100%;
            width: 50px;
            height: 10px;
        }
    }
    @media(min-width: 821px){
        .side-nav-btn{
            display: none;
        }
    }
    `
    

export const NavBar = () => {
    return(
        <NavWrapper>
            <button className='logo-link nav-link-btn' onClick={()=>scrollTo('.header-section')}>
                <Logo></Logo>
            </button>
            <div className="nav-btn-container nav-link-btn">
                <button onClick={()=>scrollTo('.booking-section')} className='contact-nav-btn nav-btn'>contact</button>
                <button onClick={()=>scrollTo('.help-section')} className='service-nav-btn nav-btn'>service</button>
            </div>
            <button className='side-nav-btn' onClick={()=> SideHandler()}>
                <div className='side-icon-container'>
                    <div className='oval oval1'></div>
                    <div className='oval oval2'></div>
                    <div className='oval oval3'></div>
                </div>
            </button>

        </NavWrapper>
    )
}


export const NavWrapperMobile = styled.nav`
    display: grid;
    grid-template-columns: auto auto;
    
    position: fixed;
    right: -100%;
    top: 0;
    z-index: 10;

    background-color: rgb(241, 151, 32);
    height: 100vh;
    transition: 1s;
    
    .extra-layer-wrapper{
        display: grid;
        grid-template-rows: auto auto auto 1fr;
        justify-content: left;
        z-index: 12;
        gap: 0.4rem;
        
        height: 100vh;
        background-color: white;
    }
    .logo-link-mobile{
        background: none;
        border: none;
        cursor: pointer;
    }
    .nav-btn-mobile{
        justify-self: left;
     cursor: pointer;
        text-align: left;
        position: relative;

        background: none;
        border: none;
        font-size: 18px;
        padding: 10px 0px 10px 0px;
        width: 100%;
    }


    .side-nav-close{
        align-self: top;
        justify-self: center;
        justify-content: center;
        align-items: center;
        position: relative;
        
        background-color: transparent;
        border: none;
        margin-top: 8px;
        margin-inline: 0.3rem;
        height: 32px;
        width: 32px;
        cursor: pointer;
    }
    .side-nav-close::before,
    .side-nav-close::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3.6px;
        background-color: white;
        border-radius: 8px;
    }

    .side-nav-close::before {
        transform: rotate(45deg);
    }

    .side-nav-close::after {
        transform: rotate(-45deg);
    }

    .nav-btn-mobile:hover{
        color: white;
    }
    .nav-btn-mobile:hover .btn-bg{width: 100%}
    .nav-btn-mobile::before{
        transition: opacity 0.4s ease, transform 0.4s ease;
        content: "- ";
        right: 10px;
        opacity: 0;
        transform: translateX(-100%); 
        margin-left: 8px;  
    }
    .nav-btn-mobile:hover::before{
        opacity: 1;
        transform: translateX(0);
    }
    .btn-bg{
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        background-color: rgb(241, 151, 32);
        width: 0px;
        z-index: -2;
        transition: 0.4s;
        border-top-right-radius: 6% 6%;
        border-bottom-right-radius: 6% 6%;
    }
    .fillout{
        width: 50vw;
    }
    @media(max-width: 820px){
        &.side-nav-on{
            right: 0;
        }
        .extra-layer-wrapper{
            right: 0;
        }
    }
    @media(min-width: 821px){
        right: -100;
    }
`
export const NavBarMobile = () => {
    return(
        <NavWrapperMobile id='nav-mobile-container'>
            <button onClick={SideHandler} className='side-nav-close'></button>
            <div className="extra-layer-wrapper">
                {/* <button className='logo-link-mobile' onClick={()=>SideLinkHandler('.header-section')}>
                    <Logo></Logo>
                </button> */}
                {/* <div className="nav-btn-container-mobile"> */}
                    <button onClick={()=>SideLinkHandler('.header-section')} className='home-nav-btn-mobile nav-btn-mobile'>home<div className='btn-bg'/></button>
                    <button onClick={()=>SideLinkHandler('.booking-section')} className='contact-nav-btn-mobile nav-btn-mobile'>Contact<div className='btn-bg'/></button>
                    <button onClick={()=>SideLinkHandler('.help-section')} className='service-nav-btn-mobile nav-btn-mobile'>Service<div className='btn-bg'/></button>
                {/* </div> */}
                <div className='fillout'/>
            </div>

        </NavWrapperMobile>
    )
}
