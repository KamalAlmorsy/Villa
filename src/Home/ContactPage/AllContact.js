import React from 'react'
import SubNavbar from '../../SubNavbar'
import MainNavbar from '../../MainNavbar'
import ContentPage from './ContentPage'
import ScrollToTop from 'react-scroll-to-top'

function AllContact() {
  return (
    <div>
        <SubNavbar/>
        <MainNavbar/>
        <ContentPage/>
        <ScrollToTop
        smooth
        style={{background:"#fff"}}
        color="#fff"
        component={
          <i class="fa-solid fa-arrow-up-long"></i>}/>
    
    </div>
  )
}

export default AllContact