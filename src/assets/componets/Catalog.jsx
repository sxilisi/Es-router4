import { Link } from "react-router-dom";

export function Catalog() {
  return (
    <div>
      <h3>Catalog Page</h3>
      <Link to="/">Go to Welcome</Link>
      <br />
      <Link to="/product">Go to Product</Link>
    </div>
  );
}
