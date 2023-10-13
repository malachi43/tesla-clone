import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

function Header() {
  const carState = useSelector(store => store.car)
  const [openClose, setOpenClose] = useState(false)

  function handleOpenClose(e) {
    e.stopPropagation()
    setOpenClose(!openClose)
  }

  return (
    <Container>
      <Fade right >
        <a >
          <img src="/images/logo.svg" atl="logo icon" />
        </a>
      </Fade>
      <Fade top>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </Menu>
      </Fade>
      <Fade left >
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenu onClick={handleOpenClose} />
        </RightMenu>
      </Fade>

      <BurgerNav isShow={openClose} >
        <CloseWrapper>
          <CustomClose onClick={handleOpenClose} />
        </CloseWrapper >
        {carState.cars.map(({ title }, index) => (
          <li key={index}> <a href="">{title}</a></li>
        ))}
        <li> <a href="">Existing Inventory</a></li>
        <li> <a href="">Used Inventory</a></li>
        <li> <a href="">Trade-in</a></li>
        <li> <a href="">Cybertruck</a></li>
        <li> <a href="">Roadster</a></li>
        <li> <a href="">Semi</a></li>
        <li> <a href="">Charging</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
 position: fixed;
 top:0;
 right: 0;
 left:0;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 20px;
 min-height: 60px;
 z-index: 2;
 a img{
 }
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
flex: 1;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}

@media (max-width: 768px){
  display: none;
}
`

const RightMenu = styled.div`  
display:flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
 position: fixed;
 top:0;
 bottom: 0;
 right:0;
 width: 300px;
 background: white;
 padding: 20px;
 transform: ${({ isShow }) => isShow ? 'translateX(0);' : 'translateX(100%);'}
 flex-direction: column;
 text-align: start;
 transition: transform 0.5s ease-out;
 overflow: scroll;
 li {
  list-style: none;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
 }

 li > a {
  font-weight: 600;
 }
  `


const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
`
