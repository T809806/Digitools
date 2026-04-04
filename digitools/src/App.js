import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cartCount={cart.length} />
    </div>
  );
}

export default App;