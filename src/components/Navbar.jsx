

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      

      <div style={{ marginTop: "10px" }}>
        <Link to="/" style={{ marginRight: "15px", color: "#ffbf66" }}>
          Home
        </Link>

        <Link to="/video" style={{ color: "#ffbf66" }}>
          Video
        </Link>
      </div>
    </nav>
  );
}
