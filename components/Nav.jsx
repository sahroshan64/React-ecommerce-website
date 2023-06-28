// import {Badge, colors} from '@material-ui/core';
import {Badge} from '@material-ui/core';
// import MailIcon from '@mui/icons-material/Mail';
 // eslint-disable-next-line
// import {search,ShoppingCartOutlined} from "@material-ui/icons" ;
import {ShoppingCartOutlined} from "@material-ui/icons" ;
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
 
const Container = styled.div`// styled components
height: 60px;
${mobile({height:"50px"})}



`;
const Wrapper = styled.div` 
padding: 10px 20px; 
display:flex;
justify-content: space-between;
${mobile({padding:"100px 0px"})}
`; 
const Left = styled.div`
flex:1;
display:flex; 
align-items:center;
`; 
const Language= styled.span`





font-size: 14px;
cursor:pointer;
${mobile({display:"none"})}
`;

 const SearchContainer = styled.div`
 border: 1px solid lightgrey;
 display:flex;
align-items:center;
margin-left:25px;
padding:5px
 `;
// eslint-disable-next-line
 const input=styled.input`
 border:none;
 ${mobile({width:"50px"})}

  
 `;
const Center = styled.div`
flex:1; 
text-align:center;
`;
const Logo = styled.h1`
 font-weight: bold;
 ${mobile({fontSize:"50px"})}
`
const Right = styled.div`
flex:1; 
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({justifyContent:"center"})}
`; 

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin:25px
${mobile({fontSize:"12px", marginLeft:"10px"})}
`; 


const Nav = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
        <input placeholder="Search"/>
          <search style={{color:"grey",fontsize:16}}/>
        </SearchContainer>

        </Left>
      
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGNIN</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />

      
    </Badge>
            </MenuItem>

        </Right>
        
         </Wrapper>
        </Container>
  )
}  

export default Nav  