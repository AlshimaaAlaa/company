import "./style.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="top-items">
        <p className="d-flex align-items-center">
          <img src="/images/phone.png" alt="" className="me-2" width={"20px"} />
          01025050102 <br /> 01204348040
        </p>
        <p className="d-flex align-items-center ms-3">
          <img src="/images/mail.png" alt="" className="me-2" width={"20px"} />
          <a
            href="mailto:Marinetop2.services@gmail.com"
            className="text-dark text-decoration-none"
          >
            Marinetop2.services@gmail.com
          </a>
        </p>
      </div>
      <div className="bottom-items">
        <div>
          <ul className="d-flex list">
            <li>
              <Link to="/ContactUs">اتصل بنا</Link>
            </li>
            <li>
              <Link to="/AboutUs">من نحن</Link>
            </li>
            <li>
              <Link to="/OurClients">عملائنا</Link>
            </li>
            <li>
              <Link to="/">الصفحة الريئسية</Link>
            </li>
          </ul>
        </div>
        <div className="company-logo">
          <Link to={"/"}>
            <img src="/images/logo.jpg" alt="" width={"90px"} className="p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;