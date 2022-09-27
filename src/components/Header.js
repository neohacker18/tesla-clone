import React,{useState} from 'react'
import styled from 'styled-components'
import {selectCars} from '../features/car/carSlice'
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  const cars=useSelector(selectCars);
  console.log(cars);

  return (       
    <Container>
        <a>
          <img src="/images/logo.svg" alt="Tesla" />
        </a>
        <Menu>
          {cars && cars.map((car,index)=>(
            <a key={index} href="#">{car}</a>
          ))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
        <MenuIcon onClick={()=>setBurgerStatus(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </MenuIcon>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper onClick={()=>setBurgerStatus(true)}>
            <CustomClose>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </CustomClose>
          </CloseWrapper>
          {cars && cars.map((car,index)=>(
            <li><a key={index} href="#">{car}</a></li>
          ))}
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px){
    display: none; 
  }
  `
  
  const RightMenu= styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const MenuIcon= styled.div`
  cursor: pointer;
`

const BurgerNav=styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: left;
  transform: ${props=>props.show?`translatex(100%)`:`translateX(0)`}; 
  transition: transform 0.2s ease-in;
  li{
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  a{
    font-weight: 600;
  }
`
  
const CustomClose=styled.div`
  cursor: pointer;
`

const CloseWrapper=styled.div`
  display: flex;
  justify-content: flex-end;
`