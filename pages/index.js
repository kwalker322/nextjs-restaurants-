import { useState } from 'react'

import Button from '../components/Button'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Link from 'next/link'
import Showcase from '../components/Showcase'

import {getAllRestaurants, getAllRestaurantsTypes} from '../lib/api';


export async function getStaticProps() {
  const restaurants = await getAllRestaurants();
  const restaurantTypes = await getAllRestaurantsTypes();
 
  return {
    props: {
      restaurants, 
      restaurantTypes
    }, // will be passed to the page component as props
  }
}

const HomePage = ({restaurants, restaurantTypes}) => {
  const [activeCategory, setActiveCategory] = useState("All")
  const filteredRestaurants = restaurants.filter((restaurant) => {
      if (activeCategory == "All") {
        return restaurants;
      }
      if (restaurant.node.restaurantTypes.edges.length > 0) {
        return restaurant.node.restaurantTypes.edges[0].node.name === activeCategory ? 
        restaurant 
        : false;
        
      }
  });
  return <Layout>
    <Showcase 
      title="A guide to the best eating spots in Syracuse."
      description="With hundreds of restaurantss located within the 315, there really is a little something for all tastes."
      backgroundImage="/images/dishes.jpeg"
      
      cta="View Restaurants"
  />
  <section> 
    
    <Container>
        <Filters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={restaurantTypes}
        />
        <Grid data={filteredRestaurants}/>
    </Container>
    
  </section>
   </Layout>
}




export default HomePage