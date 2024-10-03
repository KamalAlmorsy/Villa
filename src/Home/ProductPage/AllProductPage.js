/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import SubNavbar from "../../SubNavbar";
import MainNavbar from "../../MainNavbar";
import { Container, Row ,Col} from "reactstrap";
import axios from "axios";

class AllProductPage extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get("assets/Api.json").then((Response) => {
      this.setState({
        persons: Response.data.products,
      });
    });
  }
  render() {
    return (
      <div>
        <MainNavbar />
        <SubNavbar />
        <div className="section properties">
          <Container>
            <Row className="properties-box">
              {this.state.persons.map((item) => (
                item.id<=10?
                (
                <Col className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
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
                      <a href="property-details.html">Schedule a visit</a>
                    </div>
                  </div>
                </Col>
                ):null
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default AllProductPage;
