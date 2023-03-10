import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

// Render props (skicka in en komponent till en annan)
const Layout = ({ component: Component }) => {
  const heading = {
    techter: "bla bla",
    course: "hej på dig",
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Component data={heading} />
      <Footer />
    </>
  );
};

export default Layout;
