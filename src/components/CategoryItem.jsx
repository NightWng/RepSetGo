import styled from "styled-components";

//flex: 1 will give everything in the container a flex unit of 1
//this helps the pictures to be alligned properly
//margin 3px gives 3px margin between images
//height 70 vh means what is inside container will take up 70% of height
//Container's child divs are using position: absolute
//therfore Container has to use position: relative
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

//width and height of 100% take up their entire flex unit (in this case just 1) so images spaced equally
/*
    object-fit cover;
    The object-fit property defines how an element responds to the height and width of its content box.
    Used by itself, object-fit lets us crop an inline image by giving us fine-grained control over how it squishes and stretches inside its box.
    cover: the image will fill the height and width of its box, once again maintaining its aspect ratio but often cropping the image in the process.
*/
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//position absolute on info because  parent container is position relative 
//and this will allow us to place info on top of the image
//top: 0 and left: 0 means image will start on the top left and fill its container from there
//display: flex this has its own flex unit
//setting flex direction: column, allows the Shop Now button to be vertically under the info descriptions since the Button parent container is Info
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//title is styled.h1 because header makes it different style and font
//margin-botom gives it some space from the button below it
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
