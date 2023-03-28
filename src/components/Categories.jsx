import styled from "styled-components";

//import the categories array from data.js
import { categories } from "../data";
import CategoryItem from "./CategoryItem";


//display makes them horizontal into flex uits
//justify-content space between divides them equal spaces in their div
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

//categories.map((item)) is mapping the categories array. 
//prop given into CategoryItem is the item from the array
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;