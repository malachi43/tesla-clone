import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade left>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade right>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && (
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        )}

                    </ButtonGroup>
                </Fade>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 100wv;
height: 100vh;
background-image: ${({ bgImg }) => `url(/images/${bgImg})`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: relative;
z-index: 1;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
@media (max-width: 768px) {
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.5;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`

const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: black;
`

const DownArrow = styled.img`
  margin-top: 10px;
  height: 40px;
  animation: buttonBounce 1.5s infinite;
`

const Buttons = styled.div`
`