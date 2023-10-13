import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { useSelector } from 'react-redux'

function Home() {
    const data = useSelector(store => store.car)

    return (
        <Container>
            {data.cars.map(({ id, title, description, backgroundImg, leftButtonText, rightButtonText }, index) => {
                if (index === data.cars.length - 1) {
                    return <Section key={id}
                        title={title}
                        description={description}
                        backgroundImg={backgroundImg}
                        leftBtnText={leftButtonText}
                    />
                }
                return <Section key={id}
                    title={title}
                    description={description}
                    backgroundImg={backgroundImg}
                    leftBtnText={leftButtonText}
                    rightBtnText={rightButtonText}
                />
            })}

        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
width: 100wv;
`