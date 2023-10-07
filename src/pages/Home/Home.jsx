import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import main from "../../Coffe-img/main.png";
import "../../css/home.css";

export const Home = () => {
  return (
    <Container className="main-container">
      <div>
        <div className="row flex-md-row-reverse">
          <div className="color col-md-6">
            <h1 className="font-weight-bold">
              Start your day
              <br />
              with coffee
            </h1>
            <p className="text-white">
              <br/>
              Immerse yourself in a unique experience with our premium coffee.<br/>
              Captivating aromas, exceptional flavors, and unsurpassed quality.<br/> 
              Discover pleasure in every cup.
            </p>
            <NavLink to="/register" className="btn btn-warning  mt-4">
             Create your acount
            </NavLink>
          </div>
            <div className="col-md-5">
              <img src={main} alt="portada1" className="img-fluid img-home"/>
            </div>
        </div>
      </div>
    </Container>
  );
};
