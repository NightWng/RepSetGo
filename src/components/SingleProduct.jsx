
//main icons we need imported from material UI automatically when they're tags are used
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  

  //backghround color: rgba() number and the final number represents opacity of the container
  //the Info div is defined first here before the Container div 
  //this is because we added a special hover animation to Info in the Container.div' properties
  //this requires Info to be defined before Container in the code so that it exists
  //so by default, the Opacity of the Info div is set at 0
  //transition here does the same thing for this even if hover is applied to this div externally from some other div
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  

  //here in parent container of Container
  //the hover object at the bottom allows the hover effect to be applied to the Info div
  //so when any single item div (Info div) is hovered over, then its opacity is changed to 1
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  //position absolute puts the circles in an organized position and not based on the positoning of other divs
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  //height is 75% of container height
  //z index 2 places it over the circle
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  //border radius makes it a circle
  /*
    to make the buttons hover when mouse is brought over them we do make object hover
    so when the hover action is triggered, the background color of the button will change
    and the button will get 1.1x bigger
  */
   //transition: all 0.5 ease; adds the 0.5s ease animation to all things that move and change in this div. includes hover.
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const SingleProduct = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default SingleProduct;