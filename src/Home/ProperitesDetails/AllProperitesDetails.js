import React from 'react'
import SubNavbar from '../../SubNavbar'
import MainNavbar from '../../MainNavbar'
import PageHeading from './PageHeading';
import SingleProperite from './SingleProperite';
import BestDeal from './BestDeal';
import FooterNoGab from './FooterNoGab';
import ScrollToTop from 'react-scroll-to-top';

function AllProperitesDetails () {
  return (
    <div>
           <SubNavbar/>
           <MainNavbar/>
           <PageHeading/>
           <SingleProperite/>
           <BestDeal/>
           <FooterNoGab/>
           <ScrollToTop
        smooth
        style={{background:"#fff"}}
        color="#fff"
        component={
          <i class="fa-solid fa-arrow-up-long"></i>}/>
    
    </div>
  )
}

export default AllProperitesDetails;