/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import SubNavbar from '../SubNavbar';
import MainNavbar from '../MainNavbar';
import ScrollToTop from 'react-scroll-to-top';
function Cart() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem,emptyCart,totalItems,cartTotal } =
      useCart();
  
    if (isEmpty) return <h2 className="text-center">Your cart is empty</h2>;
  
    return (
      <div>
        <h1 className="text-center" style={{fontSize:"30px"}}>Cart ({totalUniqueItems})
        <button className="btn btn-danger my-3" onClick={()=>emptyCart()}>Empty cart</button>
       </h1>
   
        <Container>
          <Row>
           <Col md="10" className="m-auto">
        <table className="table table-dark text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.images[0]} style={{ width: "70px" }}></img>
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price*item.quantity}</td>
                <td>
                  <button
                   className="btn btn-warning"
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                    }
                  >
                    -
                  </button>
                  <button
                   className="btn  btn-success mx-2"
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                    }
                  >
                    +
                  </button>
                  <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              <td>--------------------------</td>
              <td>{totalItems}</td>
              <td>{cartTotal}</td>
              <td></td>
          </tr>
          </tbody>
          
        </table> 
                 </Col>
          </Row>
          </Container>
      </div>
    );
  }
 
  function AllCart() {
    return (
      <CartProvider>
        <SubNavbar/>
        <MainNavbar/>
       <Cart/>
       <ScrollToTop
       smooth
       style={{background:"#fff"}}
       color="#fff"
       component={
         <i class="fa-solid fa-arrow-up-long"></i>}/>
      </CartProvider>
      
   
    )
  }
  
  export default AllCart;