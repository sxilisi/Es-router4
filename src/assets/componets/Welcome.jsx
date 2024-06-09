import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h3> Welcome page</h3>
      <Link to="/catalog">Go to Catalog</Link>
      <br />
      <Link to="/product">Go to Product</Link>
    </div>
  );
}
