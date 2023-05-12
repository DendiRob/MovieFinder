import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import img_logo from './icons/logo.png'
import {ReactComponent as ImgHome}from './icons/home.svg'
import {ReactComponent as ImgDiscover} from './icons/discover.svg'
import {ReactComponent as ImgWatchlist} from './icons/watchlist.svg'
import img_close from './icons/closer.svg'
import './leftBar.css'


const NavUnlisted = styled.ul`
  text-decoration: none;
  width: 210px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-left: 0;
  margin-top: 70px;
  padding-left: 0;
  justify-content: space-between;

`;

const BarWrapper = styled.div`
    display: block;
    position: relative;
    width: 200px;
    height: 100%;
    background-color: #21242D;
    padding: 50px 0 0 40px;
    z-index: 10;


`

const LeftBarTitle = styled.div`
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: #F9F9F9AB;
    margin-bottom: 20px;
`

const Logo = styled.div`
    img{
        width: 50px;
        height: 50px;
    }
    
`
const IconLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
`
const CloserImg = styled.div`
    position: absolute;
    cursor:pointer;
    right: 15px;
    top: 20px;
    img{
        width:  25px;
        height: 25px;
    }
`


const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: .7;
`

const LeftBar = ({forCloseMenu,activeMenu}) => {

    const menuClasses = ['menuWrapper']
    if(activeMenu){
        menuClasses.push('isOpen')
    }
    return(
        <div className={menuClasses.join(' ')}>
            <BarWrapper>
                <CloserImg
                onClick={() => forCloseMenu(false)}>
                    <img
                     src={img_close}
                     alt='closer'
                     />
                </CloserImg>
                <Logo>
                    <img
                    src={img_logo}
                    alt='logo'/>
                </Logo>
            <NavUnlisted>
                <LeftBarTitle>Menu</LeftBarTitle>
                <IconLinkWrapper
                onClick={() => forCloseMenu(false)}>
                    <NavLink 
                    to='/'
                    style={({isActive}) => ({
                        color: isActive? '#00B9AE': '#F9F9F9',
                        textDecoration:'none',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 0 15px ',
                        lineHeight: '22px'

                    })}>
                        <ImgHome/>
                        Home</NavLink>
                </IconLinkWrapper>
                <IconLinkWrapper
                onClick={() => forCloseMenu(false)}>
                    <NavLink
                    to='/discover' 
                    style={({isActive}) => ({
                        color: isActive? '#00B9AE': '#F9F9F9',
                        textDecoration:'none',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 0 15px ',
                        lineHeight: '22px'

                    })}>
                    <ImgDiscover/>
                    Discover</NavLink>
                </IconLinkWrapper>
                <IconLinkWrapper
                onClick={() => forCloseMenu(false)}>
                    <NavLink 
                    to='/Watchlist' 
                    style={({isActive}) => ({
                        color: isActive? '#00B9AE': '#F9F9F9',
                        textDecoration:'none',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 0 15px ',
                        lineHeight: '22px'
                    })}>
                        <ImgWatchlist />
                        Watchlist</NavLink>
                </IconLinkWrapper>
            </NavUnlisted>   
        </BarWrapper>
        {activeMenu? <MenuOverlay onClick={() => forCloseMenu(false)} /> : <></> }
    </div>
    )
}
export default LeftBar

// isActiveH? '#00B9AE': '#F9F9F9'