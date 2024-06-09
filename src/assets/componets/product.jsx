import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <h3>Product Page</h3>
      <Link to="/">Go to Welcome</Link>
      <br />
      <Link to="/catalog">Go to Catalog</Link>
    </div>
  );
}
