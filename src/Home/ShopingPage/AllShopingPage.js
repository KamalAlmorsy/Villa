/* eslint-disable jsx-a11y/alt-text */
import { CartProvider, useCart } from "react-use-cart";
import MainNavbar from "../../MainNavbar";
import SubNavbar from "../../SubNavbar";
import DataApi from "./DataApi";
import { Container, Row, Col, Button } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";
function Page() {
  const { addItem } = useCart();

  return (
    <div>
      <Container className="section properties">
        <Row className="properties-box">
          {DataApi.map((item) => (
            <Col
              key={item.id}
              className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv"
            >
              <div className="item">
                <a href="property-details.html">
                  <img src={item.images} alt="" />
                </a>
                <span className="category">{item.title}</span>
                <h6>{item.price}</h6>
                <h4>
                  <a href="property-details.html">
                    34 New Street Miami, OR 24650
                  </a>
                </h4>
                <ul>
                  <li>
                    Bedrooms: <span>10</span>
                  </li>
                  <li>
                    Bathrooms: <span>12</span>
                  </li>
                  <li>
                    Area: <span>860m2</span>
                  </li>
                  <li>
                    Floor: <span>3</span>
                  </li>
                  <li>
                    Parking: <span>10 spots</span>
                  </li>
                </ul>
                <div className="main-button">
                  <Button
                    className="btn btn-success"
                    onClick={() => addItem(item)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}



function AllShopingPage() {
  return (
    <CartProvider>
      <SubNavbar />
      <MainNavbar />
      <Page />
      <ScrollToTop
        smooth
        style={{background:"#fff"}}
        color="#fff"
        component={
          <i class="fa-solid fa-arrow-up-long"></i>}/>
    
     
    </CartProvider>
  );
}
export default AllShopingPage;
