import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"
import {sliderItems} from "../data"


//height 100vh means it will take up the screen
//positon: relative places an elment relative to its current position without changing the layout around it
//parent has parent relative and child has positon absolute
//overflow: hidden; makes it so that the slider elements don't go past the current viewable page horizontally
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

//border-radius is max radius of the square button
//align and justify put it in center of flex unit
//position absolute places element relative to its parent's position and changing the layout around it
//z-index: 2 means it is on the highest or closest layer to the user (on the z axis). Higher number means closer. z-index only works for positioned elements
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};    
    right: ${props=> props.direction === "right" && "10px"};    
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

//here the wrapper contains the slider too
//and to make all the slide elements, horizontal, we do display: flex
//transform: trasnlateX(0vw) movesthe current wrapper on the x axis by 0vw (width of container)
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`


//100vw for width and 100 vh for height means it will fill our whole container
//background color variable (bg) passed in as a prop to decide background color formatting for each element
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
//in the code we see that the parent will be the Slide containter and height of 100% makes it take the whole of its container but container already taking 100 vh (so all of screen)
//also it is the first flex unit coming from the left of the container
const ImgContainer = styled.div`
    height: 100%
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

//infoContainer will take up one flex unit of its parent container too
//padding of 50px is added to make it look cleaner and seperated
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

//Title uses the heading (h1) tag therefore the font for it will automatically be bigger and bolder uless we override with our own styles like here
const Title = styled.h1`
    font-size: 70px;
`

//Desc (Description) uses the  paragraph tag (p) therefore the faunt is regular and default
//margin: 50px gives the Desc container margin of 50px from top and bottom and 0px from left and right
//letter spacing is spacing in between each letter of that font
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {


    //state hook
    //will decide slide index
    //will be using slide arrays for each slider element
    const [slideIndex, setSlideIndex] = useState(0);


    //handleClick function with parameter of direction passed in
    //this function used to handle the onClick event for each arrow button on the slider
    const handleClick = (direction) => {

    };


    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={require(item.img)} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>
                                {item.desc}
                            </Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide> 
                ))}                 
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
