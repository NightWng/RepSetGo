import styled from "styled-components";

//popular products array imported from data.js
import { popularProducts } from "../data";
import SingleProduct from "./SingleProduct";

/*
    The CSS flex-wrap property is used to specify whether flex items are forced into a single line or wrapped onto multiple lines. 
    The flex-wrap property allows enabling the control direction in which lines are stacked.
    It is used to designate a single line or multi-line format to flex items inside the flex container.
    wrap: This property is used to break the flex item into multiples lines. It makes flex items wrap to multiple lines according to flex item width.

    This allows all the SingleProducts, when iterated through to be pushed to thee next line horizontally if they reach the end of the page
*/
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

/*
    popularProducts.map(item) requires the item parameter and will be mapped as in go through to that item
    To use the map() function, attach it to an array you want to iterate over. 
    The map() function expects a callback as the argument and executes it once for each element in the array. 
    From the callback parameters, you can access the current element, the current index, and the array itself. 
    The map() function also takes in an optional second argument, which you can pass to use as this inside
    //also map has unit key. is some identifier that is different for each element in the array
*/
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;