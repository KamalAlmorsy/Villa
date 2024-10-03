import React from "react";

import SubNavbar from "../SubNavbar";
import MainNavbar from "../MainNavbar";

import Features from "./Features";
import Video from "./Video";
import VideoContent from "./VideoContent";
import FunFacts from "./FunFacts";
import Deal from "./Deal";
import Properites from "./Properites";
import Contact from "./Contact";
import ContactContent from "./ContactContent";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";




function AllHome() {
  return (
    <div>
     
      <SubNavbar />
      <MainNavbar />
   
      <Features/>
      <Video/>
      <VideoContent/>
      <FunFacts/>
       <Deal/>
       <Properites/>
       <Contact/>
       <ContactContent/>
       <Footer/>
       <ScrollToTop
        smooth
        style={{background:"#fff"}}
        color="#fff"
        component={
          <i class="fa-solid fa-arrow-up-long"></i>}/>
    
    </div>
  );
}
export default AllHome;
