import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

//wrapper being used around the navbar with as a styled components with specified properties
//saves the need to use a separate css style sheet

/*
 -padding is padding on the anything horizontal and vertical in the wrapper container
 -display flex sets how a flex item will grow or shring to fit the space
 -justify-content space betwen distributes items evenly. first item is flush with the start, last item is flush with the end
*/
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex; 
   justify-content: space-between
   align-items: center;
`

/*
- flex: 1 is 1 unit of the flex item. each, left middle and right is assigned one unit
- better than assigning a width property in each of 33.3333% since 100% space is divided over 3 sections
- better than using width: 33.33%
*/
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

/*
 -styled.span adds a unique style to the inline span element
 -cursor: pointer changes cursor to the hand with the finger up
 showing that this is clickable as the language option should be
 */
const Language = styled.span`
    font-size: 14px;
    cursor: ponter;
`

/* This is for searchbox in top left of nav bar as the </Left> component is its parent component used in this case for the navbar
 - display flex makes it into a flex unit, horizontal
 */
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

/* This is for searchbox in top left of nav bar as the </Left> component is its parent component used in this case for the navbar with immediate parent being </SearchContainer>
 - allowsi nput through the search box
 */
const Input = styled.input`
    border: none;
`

/*
- text-align: center puts all text in the center flexbox unit in the center of that unit
*/
const Center = styled.div`
    flex: 1;
    text-align: center;
`

//h1 means header
const Logo =styled.h1`
    font-weight: bold;
`
//justify-content: flex-end; pushes the content to the end of the flex unit
//in this case: the right side of the screen
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
//margin- left of 25 px allows all the buttons for: REGISTER, SIGN IN and the Cart to be spaced with 25 px between them
const MenuItem = styled.div`
    font-size: 14px;
    curosr: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
           <Wrapper>
               <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize: 16}}/>
                    </SearchContainer>
               </Left>
               <Center>
                   <Logo>RepSetGo.</Logo>
               </Center>
               <Right>
                   <MenuItem>REGISTER</MenuItem>
                   <MenuItem>SIGN IN</MenuItem>
                   <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>

                        </Badge>
                   </MenuItem>
               </Right>
           </Wrapper> 
        </Container>
    );
};

export default Navbar;
