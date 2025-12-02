import Hero from "./componentsss/Hero";
import Footer from "./componentsss/Footer";
import MostPicked from "./componentsss/MostPicked";
import Search from "./componentsss/Search";
import RoomRegisterPage from "./componentsss/RoomRegisterPage";
import Housecard from "./house/layout";
import BookingPage from "./paymentpage1/page";
import DocumentDashboard from "./documentdashboard/page";
import DocumentLayout from "./documentdashboard/Layout";
import Dashboard from "./dashboardss/page";
import Bookingdocument from "./bookingdocument/page";
import { Link } from "lucide-react";
import Button from "./componentsss/Button";
import Navbar from "./componentsss/Navbar";
import House from "./house/page";


export default function Home() {
  return (
      <>
      <Navbar />

      <Hero />

    {/*search component*/}
      <Search />

    {/* room register component*/}
      <MostPicked />

     {/* booking page component*/}
      <House />

     

      {/*footer*/}
      <Footer />

      
         
      </>
  );
}
