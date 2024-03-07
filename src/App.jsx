import { useEffect } from "react";
import { Extras } from "./components/Extras";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ProfileData } from "./components/ProfileData";
import { Support } from "./components/Support";
import { Transactions } from "./components/Transactions";

function App() {

    useEffect(() => {
    // Dynamically change the status bar color for iOS
    const metaAppleStatusBar = document.querySelector("meta[name=apple-mobile-web-app-status-bar-style]");
    if (metaAppleStatusBar) {
      metaAppleStatusBar.setAttribute("content", "black"); // Change "black" to your desired color
      console.log("Changed the status bar color for iOS");
    }
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
