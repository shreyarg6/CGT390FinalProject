import { Link } from "react-router-dom";
import '../styles/NotFound.css';

const NotFound = () => {

  return (
    <div className="not-found-page">
    <div className="not-found-page-content">
      <h1>404</h1>
      <p style={{textAlign: "center"}}>Sorry, page not found</p>
      <Link to="/" style={{textAlign: "center", display: "block", color: "#abaaab", textDecoration: "underline"}}>Go to Home page</Link>
    </div>
    </div>
  );
};

export default NotFound;