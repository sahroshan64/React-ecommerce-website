import React from 'react'
import Nav from '../components/Nav'
import Announcement from '../components/Announcement'
import Slid from '../components/Slid'
import Categor from '../components/Categor'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductList from './ProductList'




  
// import { Slider } from '@material-ui/core'

 



 
 
const Home = () => {
  return (     
    <div>  
      <Announcement/>   
     <Nav/>  
     <Slid/>    
     <Categor/>
     <Products/>
     <Newsletter/>
     <Footer/>
     <ProductList/>
    
     
     
     
       
      </div>    
  ) 
}  
   
export default Home      