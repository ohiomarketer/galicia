import { useEffect } from "react";
import { Extras } from "./components/Extras";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ProfileData } from "./components/ProfileData";
import { Support } from "./components/Support";
import { Transactions } from "./components/Transactions";

function App() {

    useEffect(() => {
        // Dynamically change the theme color
        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", "#ffffff");
      }, []);
      
  return (
    <>
      <NavBar />
      <ProfileData />
      <Transactions />
      <Support />
      <Extras />
      <Footer />
    </>
  );
}

export default App;
