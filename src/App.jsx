import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import CartProvider from "./providers/cartprovider";
import WishListProvider from "./providers/wishlistprovider";

const App = () => {
  return (
    <>
      <WishListProvider>
        <CartProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartProvider>
      </WishListProvider>
    </>
  );
};

export default App;
