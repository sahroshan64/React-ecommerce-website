import React from 'react'


// import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { styled } from 'styled-components';
import { categories } from "../data";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
 

`;

const Categor = () => { 
    return (
        <Container>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      );
}

export default Categor

