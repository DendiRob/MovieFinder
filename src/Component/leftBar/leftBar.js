import React, { useState } from 'react';
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
const Menu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
    visibility: visible;
    opacity: 1;
    transition: all .6s;

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

const LeftBar = ({forCloseMenu}) => {

    const [isActiveH,setAcH] = useState(false)
    const [isActiveD,setAcD] = useState(false)
    const [isActiveW,setAcW] = useState(false)
    

    const isActivH = () => {
        setAcH(true)
        setAcW(false)
        setAcD(false)
    }
    const isActivD = () => {
        setAcD(true)
        setAcW(false)
        setAcH(false)
    }
    const isActivW = () => {
        setAcW(true)
        setAcH(false)
        setAcD(false)
    }


    return(
        <Menu>
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
                >
                    <ImgHome stroke={isActiveH? '#00B9AE': '#F9F9F9'}/>
                    <NavLink 
                    to='/'
                    onClick={isActivH}
                    style={({isActive}) => ({
                        color: isActive? '#00B9AE': '#F9F9F9',
                        textDecoration:'none',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 0 15px ',
                        lineHeight: '22px'

                    })}>
                        Home</NavLink>
                </IconLinkWrapper>
                <IconLinkWrapper>
                    <ImgDiscover stroke={isActiveD? '#00B9AE': '#F9F9F9'}/>
                    <NavLink
                    to='/discover' 
                    onClick={isActivD}
                    style={({isActive}) => ({
                        color: isActive? '#00B9AE': '#F9F9F9',
                        textDecoration:'none',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 0 15px ',
                        lineHeight: '22px',
                    })}>
                        Discover</NavLink>
                </IconLinkWrapper>
                <IconLinkWrapper>
                    <ImgWatchlist stroke={isActiveW? '#00B9AE': '#F9F9F9'}/>
                    <NavLink 
                    to='/Watchlist' 
                    onClick={isActivW}
                    style={({isActive}) => ({
                        color: isActive? '#00B9AE': '#F9F9F9',
                        textDecoration:'none',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 0 15px ',
                        lineHeight: '22px'
                    })}>
                        Watchlist</NavLink>
                </IconLinkWrapper>
            </NavUnlisted>   
        </BarWrapper>
        <MenuOverlay>

</MenuOverlay> 
        </Menu>
    )
}
export default LeftBar