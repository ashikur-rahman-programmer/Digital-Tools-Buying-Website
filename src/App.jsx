import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import StateSection from "./Components/StateSection";
import Tab from "./Components/Tab";
import { toast, ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return await res.json();
};

const dataPromise = fetchData();

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (cartData) => {
    const isExist = cart.find((item) => item.id === cartData.id);
    if (isExist) {
      toast.error("Already add to cart!");
      return;
    } else {
      const newCart = [...cart, cartData];
      setCart(newCart);
      toast.success("Successfully added to cart");
    }
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <StateSection />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Tab
          dataPromise={dataPromise}
          handleAddToCart={handleAddToCart}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
