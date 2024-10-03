import React from 'react'
import SubNavbar from '../../SubNavbar'
import MainNavbar from '../../MainNavbar'
import PageHeading from './PageHeading';
import Properites from '../Properites';
import Footer from '../Footer';
import ScrollToTop from 'react-scroll-to-top';

function AllProperites() {
  return (
    <div>
        <SubNavbar/>
        <MainNavbar/>
        <PageHeading/>
        <Properites/>
        <Footer/>
        <ScrollToTop
        smooth
        style={{background:"#fff"}}
        color="#fff"
        component={
          <i class="fa-solid fa-arrow-up-long"></i>}/>
    
    </div>
  )
}

export default AllProperites;